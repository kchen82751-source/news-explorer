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
import logOutButtom from "../../assets/logout.svg";
import { useState } from "react";

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
  onSignOut,
  onSearch,
  searchbutton,
}) {
  const [query, setquery] = useState("");
  // const { currentUser } = useContext(CurrentUserContext);
  //   const currentDate = new Date().toLocaleString("default", {
  //     month: "long",
  //     day: "numeric",
  //   });

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(query);
  }

  return (
    <header className="header__site">
      <div className="header__logo-buttons">
        <div className="header__logo">
          <img src={logo} alt="NewsEplorer" className="header_img" />
        </div>

        <nav className="header__home-signin">
          <button onClick={handleHomeClick} className="header__home">
            Home
          </button>
          {isLoggedIn ? (
            <>
              <button className="header__save">Saved article</button>
              <button onClick={onSignOut} className="header__logged-out">
                Log out
                <img
                  src={logOutButtom}
                  alt="Log Out Buttom"
                  className="header__logged-out-logo"
                />
              </button>
            </>
          ) : (
            <button onClick={handleLoginClick} className="header__signin">
              Sign in
            </button>
          )}
        </nav>
      </div>
      <main style={{ padding: "2rem" }} className="header_headline-statement">
        <h1 className="header_headline">What's going on in the world?</h1>
        <p className="header_statement">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form onSubmit={handleSubmit} className="header__search">
          <input
            value={query}
            onChange={(e) => setquery(e.target.value)}
            type="search info"
            name="search"
            className="header__search-field"
            id="search-topic"
            placeholder="Enter topic"
            // value={values.search}
            // onChange={handleChange}
          />
          <button type="submit" className="header__search-button">
            Search
          </button>
        </form>
      </main>
    </header>
  );
}

export default Header;
