import "./SavedArticle.css";
import { NavLink } from "react-router-dom";
import SaveArticlelogOut from "../../assets/savearticle-logout.svg";
import NewsCard from "../NewsCard/NewsCard";

export default function SavedArticle({
  articleItems = [],
  handleHomeClick,
  onSave,
  onSignOut,
  isLoggedIn,
}) {
  const keywords = [...new Set(
    articleItems
      .flatMap((article) => [article.keyword, article.category])
      .filter((keyword) => typeof keyword === "string" && keyword.trim())
      .map((keyword) => keyword.trim()),
  )];
  const visibleKeywords = keywords.slice(0, 2);
  const remainingKeywordCount = keywords.length - visibleKeywords.length;

  return (
    <section>
      <div className="savearticle__logo-buttons">
        <button
          type="button"
          className="savearticle__logo"
          onClick={handleHomeClick}
          aria-label="NewsExplorer home"
        >
          NewsExplorer
        </button>
        <nav className="savearticle__home-signin">
          <button onClick={handleHomeClick} className="savearticle__home">
            Home
          </button>
          <NavLink to="/saved-articles" className="savearticle__save">
            Saved articles
          </NavLink>
          <button onClick={onSignOut} className="savearticle__logged-out">
            Log out
            <img
              src={SaveArticlelogOut}
              alt="Log out"
              className="savearticle__logged-out-logo"
            />
          </button>
        </nav>
      </div>
      <main className="savedarticle__header-statement">
        <div className="savedarticle__summary">
          <p className="savedarticle__header">Saved articles</p>
          <h1 className="savedarticle__statement">
            You have {articleItems.length} saved{" "}
            {articleItems.length === 1 ? "article" : "articles"}
          </h1>
          <p className="savedarticle__keywords">
            By keywords:{" "}
            <strong>
              {visibleKeywords.join(", ")}
              {remainingKeywordCount > 0 &&
                `${visibleKeywords.length ? ", " : ""}and ${remainingKeywordCount} other${remainingKeywordCount === 1 ? "" : "s"}`}
            </strong>
          </p>
        </div>
        {articleItems.length > 0 ? (
          <NewsCard
            articles={articleItems}
            isLoggedIn={isLoggedIn}
            savedArticles={articleItems}
            onSave={onSave}
            isSavedPage
          />
        ) : (
          <p className="savedarticle__empty">
            You haven’t saved any articles yet.
          </p>
        )}
      </main>
    </section>
  );
}

//Create an array of all keywords in the saved articles objects.
//Create a string that displays all keywords, not duplicated.
//If there are more than 2, it should only display the first two keywords, and a count of the remaining ones (if any)
