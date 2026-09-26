import React from "react";
import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, apiKey, defaultSearchItems } from "../../utils/constants";
import Header from "../Header/Header";
// import Main from "../../components/Main/Main";
import Footer from "../Footer/Footer";
// import AddItemModal from "../AddItemModal/AddItemModal";
// import ItemModal from "../ItemModal/ItemModal";
// import Profile from "../Profile/Profile";
import { getNews, filterNewsData } from "../../utils/api";
import CurrentSearchUnitContext from "../../contexts/CurrentSeachUnitContext";
// import {
//   // addItem,
//   // getItems,
//   removeItem,
//   // addCardLike,
//   // removeCardLike,
// } from "../../utils/api";
// import RegisterModal from "../RegisterModal/RegisterModal";
import { getUserInfo, signin, signup, editProfile } from "../../utils/auth";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
  const [searchItems, setSearchItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearchUnit, setCurrentSearchUnit] = useState("F");
  const [editProfileClick, setEditProfileClick] = useState("");

  const handleLoginClick = () => {
    console.log("Hello");
    setActiveModal("loggedin");
  };

  console.log(activeModal);

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
            {/* <Routes>
              <Route
                path="/"
                element={
                  <Main
                    newsData={newsData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleCardLike={handleCardLike}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      onSignOut={handleSignOut}
                      onEditProfile={handleEditProfileClick}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes> */}

            <Footer />
          </div>

          <LoginModal isOpen={activeModal === "loggedin"} />
        </div>
      </CurrentSearchUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

// Import useState Create handle function that turns activeModal into
//       “”loggedIn Pass this function as a prop to the signing button (Inside the
//       header)
export default App;
