import { useEffect, useState } from "react";
import "./SearchResult.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../../assets/not-found.svg";

const ARTICLES_PER_PAGE = 3;

export default function SearchResult({
  articles = [],
  hasSearched,
  isLoading,
  error,
  isLoggedIn,
  savedArticles = [],
  onSave,
  onLogin,
}) {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  useEffect(() => {
    setVisibleCount(ARTICLES_PER_PAGE);
  }, [articles]);

  if (!hasSearched) return null;

  return (
    <section className="searchresult" aria-live="polite">
      <h2 className="searchresult__header">Search results</h2>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="searchresult__message" role="alert">
          Sorry, something went wrong during the request. Please try again
          later.
        </p>
      ) : articles.length === 0 ? (
        <div className="searchresult__not-found">
          <img
            src={NotFound}
            alt="Not Found"
            className="searchresult__not-found-logo"
          />
          <h2 className="searchresult__not-found-header">Nothing found</h2>
          <p className="searchresult__message">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      ) : (
        <>
          <NewsCard
            articles={articles.slice(0, visibleCount)}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onSave={onSave}
            onLogin={onLogin}
          />
          {visibleCount < articles.length && (
            <button
              className="searchresult__show-more"
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + ARTICLES_PER_PAGE, articles.length),
                )
              }
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}
