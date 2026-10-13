import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import {
  coordinates,
  apiKey,
  defaultArticleItems,
} from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../Footer/Footer";
// import AddItemModal from "../AddItemModal/AddItemModal";
// import ItemModal from "../ItemModal/ItemModal";
import SavedArticle from "../../components/SavedArticle/SavedArticle";
import { getNews, filterNewsData } from "../../utils/api";
// import CurrentSearchUnitContext from "../../contexts/CurrentSeachUnitContext";
// import {
//   // addItem,
//   // getItems,
//   removeItem,
//   // addCardLike,
//   // removeCardLike,
// } from "../../utils/api";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import { getUserInfo, signin, signup } from "../../utils/auth";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import LoginModal from "../../components/LoginModal/LoginModal";
import RegistrationSuccessModal from "../../components/RegistrationSuccessModal/RegistrationSuccessModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import EditProfileModal from "../EditProfileModal/EditProfileModal";
import footer from "../../assets/footer.svg";
import placeholder from "../../assets/placeholder-image.svg";
import About from "../../components/About/About";

function App() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState({
    type: "",
    search: "",
  });
  const [count, setCount] = useState(0);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [articleItems, setArticleItems] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [savedArticles, setSavedArticles] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedArticles") || "[]");
    } catch {
      return [];
    }
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearchUnit, setCurrentSearchUnit] = useState("F");
  const [editPlaceholderImage, setEditPlaceholderImage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setAuthError("");
    setActiveModal("loggedin");
  };
  const handleRegisterClick = () => {
    setAuthError("");
    setActiveModal("signup");
  };

  const handlesignin = ({ email, password }) => {
    setAuthError("");
    if (!email?.trim() || !password?.trim()) {
      setAuthError("Please enter your email and password.");
      return;
    }

    signin({ email, password })
      .then((res) => {
        setCurrentUser(res);
        setisLoggedIn(true);
        closeActiveModal();
      })
      .catch((error) => setAuthError(error.message));
  };

  const onSignupActiveModal = ({ email, password, name, avatar }) => {
    setAuthError("");
    signup({ email, password, name, avatar })
      .then(() => {
        setActiveModal("signup-success");
      })
      .catch((error) => setAuthError(error.message));
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setAuthError("");
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setisLoggedIn(false);
  };

  const handleGetNews = (inputValue) => {
    setCurrentSearchTerm(inputValue);
    setHasSearched(true);
    setIsLoading(true);
    setErrorText("");
    setArticleItems([]);
    getNews(inputValue)
      .then((data) => {
        setArticleItems(data.articles || []);
      })
      .catch(() => {
        setArticleItems([]);
        setErrorText("request-failed");
      })
      .finally(() => setIsLoading(false));
  };

  const handleSaveArticle = (article) => {
    const articleToSave = {
      ...article,
      keyword: article.keyword || currentSearchTerm,
    };
    setSavedArticles((currentArticles) => {
      const nextArticles = currentArticles.some((saved) => saved.url === article.url)
        ? currentArticles.filter((saved) => saved.url !== article.url)
        : [...currentArticles, articleToSave];
      localStorage.setItem("savedArticles", JSON.stringify(nextArticles));
      return nextArticles;
    });
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrorText(''); // Reset error message on a new submission
  //   setIsLoading(true);

  //   // 1. Basic Client-Side Validation
  //   if (!email || !password) {
  //     setErrorText('Please fill out all fields.');
  //     setIsLoading(false);
  //     return;
  //   }

  //   try {
  //     // 2. Mock API Request for Authentication
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       // Fallback to API error message or a generic one
  //       throw new Error(data.message || 'Invalid email or password.');
  //     }
  //     // Handle successful sign-in here (e.g., redirect or save token)
  //     console.log('Successfully signed in!', data);

  //   } catch (err) {
  //     // 3. Update the error state with the caught error text
  //     setErrorText(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      {/* <CurrentSearchUnitContext.Provider value={{ currentSearchUnit }}> */}
      <div className="app__page">
        <div className="app__page-content">
          {/* The global header renders here */}

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLoginClick={handleLoginClick}
                  newsData={newsData}
                  isLoggedIn={isLoggedIn}
                  handleSignOut={handleSignOut}
                  handleHomeClick={handleHomeClick}
                  handleGetNews={handleGetNews}
                  articles={articleItems}
                  isLoading={isLoading}
                  searchError={errorText}
                  hasSearched={hasSearched}
                  savedArticles={savedArticles}
                  handleSaveArticle={handleSaveArticle}
                />
              }
            />

            <Route
              path="/saved-articles"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedArticle
                    // onArticleClick={onArticleClick}
                    articleItems={savedArticles}
                    // handleAddClick={handleAddClick}
                    onSignOut={handleSignOut}
                    isOpen={activeModal === "openpage"}
                    onSave={handleSaveArticle}
                    handleHomeClick={handleHomeClick}
                    isLoggedIn={isLoggedIn}
                    // onEditPlaceholderImage={handleEditPlaceholderImage}
                    // handleBookmark={handleBookmark}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer onHomeClick={handleHomeClick} />
        </div>
        <RegisterModal
          onSignUp={onSignupActiveModal}
          isOpen={activeModal === "signup"}
          onClose={closeActiveModal}
          secondaryButtonAction={handleLoginClick}
          authError={authError}
          // onSubmit={handleSubmit}
        />
        <LoginModal
          isOpen={activeModal === "loggedin"}
          onSignIn={handlesignin}
          onClose={closeActiveModal}
          secondaryButtonAction={handleRegisterClick}
          authError={authError}
          // onSubmit={handleSubmit}
        />
        <RegistrationSuccessModal
          isOpen={activeModal === "signup-success"}
          onClose={closeActiveModal}
          onSignIn={handleLoginClick}
        />
      </div>
      {/* </CurrentSearchUnitContext.Provider> */}
    </CurrentUserContext.Provider>
  );
}

// Import the Header and About components into the Main component. Make sure to pass all required props from App -> Main -> their respective components
export default App;
