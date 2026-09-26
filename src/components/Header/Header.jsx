import React from "react";
import "./Header.css";
import logo from "../../assets/news-explorer.svg";
import headerImage from "../../assets/header-image.svg";
import ovalButton from "../../assets/signin-oval.svg";
import searchField from "../../assets/search-field.svg";
import headerTop from "../../assets/header-top.svg";
import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

// import { useLocation } from "react-router-dom";

// function CurrentPageChecker() {
//   const location = useLocation();

//   // location.pathname returns the relative path (e.g., "/dashboard")
//   console.log("Current path:", location.pathname);

//   return <p>You are currently on the {location.pathname} page</p>;
// }

function Header({
  handleAddClick,
  // weatherData,
  isLoggedIn,
  handleHomeClick,
  handleLoginClick,
}) {
  // const { currentUser } = useContext(CurrentUserContext);
  //   const currentDate = new Date().toLocaleString("default", {
  //     month: "long",
  //     day: "numeric",
  //   });

  return (
    <header className="header_site">
      <div className="header_logo-buttons">
        <div className="header_logo">
          <img src={logo} alt="NewsEplorer" className="header-img" />
        </div>

        <nav className="header__home-signin">
          <button onClick={handleHomeClick} className="header__home">
            Home
          </button>

          <button onClick={handleLoginClick} className="header__signin">
            Sign in
            {/* <img src={ovalButton} alt="Oval Button" /> */}
          </button>
        </nav>
      </div>
      <img src={headerTop} alt="Header Top" className="header-top" />
      <main style={{ padding: "2rem" }} className="header_headline-statement">
        <h1 className="header_headline">What's going on in the world?</h1>
        <p className="header_statement">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <img
          src={searchField}
          alt="Search Field"
          className="header-search-field"
        />
      </main>
    </header>
  );
}

export default Header;
