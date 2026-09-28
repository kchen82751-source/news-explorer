import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import CurrentSearchUnitContext from "../../contexts/CurrentSeachUnitContext";
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
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import EditProfileModal from "../EditProfileModal/EditProfileModal";
import footer from "../../assets/footer.svg";
import placeholder from "../../assets/placeholder-image.svg";
import About from "../../components/About/About";

function App() {
  const [newsData, setNewsData] = useState({
    type: "",
    search: "",
  });
  const [count, setCount] = useState(0);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [articleItems, setArticleItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearchUnit, setCurrentSearchUnit] = useState("F");
  const [editPlaceholderImage, setEditPlaceholderImage] = useState("");

  const handleLoginClick = () => {
    setActiveModal("loggedin");
  };
  const handleRegisterClick = () => {
    setActiveModal("signup");
  };

  const handlesignin = ({ email, password }) => {
    signin({ email, password })
      .then((res) => {
        setCurrentUser(res);
        console.log(res);
        setisLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onSignupActiveModal = ({ email, password, name, avatar }) => {
    signup({ email, password, name, avatar })
      .then(() => {
        handlesignin({ email, password });
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setisLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <CurrentSearchUnitContext.Provider value={{ currentSearchUnit }}>
        <div className="app__page">
          <div className="app__page-content">
            {/* The global header renders here */}
            <Header
              // handleAddClick={handleAddClick}
              newsData={newsData}
              isLoggedIn={isLoggedIn}
              // handleRegister={handleRegister}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    newsData={newsData}
                    // onArticleClick={onArticleClick}
                    articleItems={articleItems}
                    // handleBookmark={handleBookmark}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <SavedArticle
                      // onArticleClick={onArticleClick}
                      articleItems={articleItems}
                      // handleAddClick={handleAddClick}
                      onSignOut={handleSignOut}
                      // onEditPlaceholderImage={handleEditPlaceholderImage}
                      // handleBookmark={handleBookmark}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <About />
            <Footer />
          </div>
          <RegisterModal
            onSignUp={onSignupActiveModal}
            isOpen={activeModal === "signup"}
            onClose={closeActiveModal}
            secondaryButtonAction={handleLoginClick}
          />
          <LoginModal
            isOpen={activeModal === "loggedin"}
            onSignIn={handlesignin}
            onClose={closeActiveModal}
            secondaryButtonAction={handleRegisterClick}
          />
        </div>
      </CurrentSearchUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

// Import useState Create handle function that turns activeModal into
//       “”loggedIn Pass this function as a prop to the signing button (Inside the
//       header)
export default App;
