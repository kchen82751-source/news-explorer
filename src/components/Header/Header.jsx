import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import logOutButtom from "../../assets/logout.svg";
import { useState } from "react";

function Header({
  isLoggedIn,
  handleHomeClick,
  handleLoginClick,
  onSignOut,
  onSearch,
}) {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [validationError, setValidationError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function navigateHome() {
    setMenuOpen(false);
    handleHomeClick();
  }

  function openLogin() {
    setMenuOpen(false);
    handleLoginClick();
  }

  function signOut() {
    setMenuOpen(false);
    onSignOut();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setValidationError("Please enter a keyword");
      return;
    }
    setValidationError("");
    onSearch(trimmedQuery);
  }

  return (
    <header className="header__site">
      <div className="header__logo-buttons">
        <button
          type="button"
          className="header__logo"
          onClick={navigateHome}
          aria-label="NewsExplorer home"
        >
          NewsExplorer
        </button>

        <button
          type="button"
          className={`header__menu-toggle${menuOpen ? " header__menu-toggle_open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={`header__home-signin${menuOpen ? " header__home-signin_open" : ""}`}>
          <button
            onClick={navigateHome}
            type="button"
            className={`header__home${pathname === "/" ? " header__home_active" : ""}`}
          >
            Home
          </button>
          {isLoggedIn ? (
            <>
              <NavLink to="/saved-articles" className="header__save" onClick={() => setMenuOpen(false)}>
                Saved articles
              </NavLink>
              <button onClick={signOut} type="button" className="header__logged-out">
                Log out
                <img
                  src={logOutButtom}
                  alt="Log Out Buttom"
                  className="header__logged-out-logo"
                />
              </button>
            </>
          ) : (
            <button onClick={openLogin} type="button" className="header__signin">
              Sign in
            </button>
          )}
        </nav>
      </div>
      <main className="header_headline-statement">
        <h1 className="header_headline">What's going on in the world?</h1>
        <p className="header_statement">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form onSubmit={handleSubmit} className="header__search">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.trim()) setValidationError("");
            }}
            type="search"
            name="search"
            className="header__search-field"
            id="search-topic"
            placeholder="Enter topic"
            aria-describedby={validationError ? "search-error" : undefined}
          />
          <button type="submit" className="header__search-button">
            Search
          </button>
        </form>
        {validationError && (
          <p className="header__search-error" id="search-error" role="alert">
            {validationError}
          </p>
        )}
      </main>
    </header>
  );
}

export default Header;
