import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmarkicon.svg";
import markedIcon from "../../assets/markedicon.svg";

export default function NewsCard({
  articles = [],
  isLoggedIn,
  savedArticles = [],
  onSave,
  onLogin,
  isSavedPage = false,
}) {
  return (
    <div className="news-container">
      <div className="news-grid">
        {articles.map((article, index) => (
          <article
            className="news-card"
            key={article.url || `${article.title}-${index}`}
          >
            {article.keyword || article.category ? (
              <span className="news-card__category">
                {article.keyword || article.category}
              </span>
            ) : null}
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title || ""} />
            )}
            <div className="news-content">
              <div className="news-card__topline">
                {article.source?.name && <p>{article.source.name}</p>}
                <div className="news-card__actions">
                  <button
                    className={`news-card__save ${!isSavedPage && !isLoggedIn ? "news-card__save_inactive" : ""}`}
                    type="button"
                    aria-label={
                      isSavedPage
                        ? "Delete saved article"
                        : isLoggedIn
                          ? savedArticles.some(
                              (saved) => saved.url === article.url,
                            )
                            ? "Remove saved article"
                            : "Save article"
                          : "Sign in to save articles"
                    }
                    onClick={() =>
                      isSavedPage || isLoggedIn ? onSave(article) : onLogin?.()
                    }
                  >
                    {isSavedPage ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 3v7m4-7v7" />
                      </svg>
                    ) : (
                      <img
                        src={
                          savedArticles.some(
                            (saved) => saved.url === article.url,
                          )
                            ? markedIcon
                            : bookmarkIcon
                        }
                        alt="markicon-bookmarkicon"
                      />
                    )}
                  </button>
                  {!isLoggedIn && !isSavedPage && (
                    <span className="news-card__save-tooltip">
                      Sign in to save articles
                    </span>
                  )}
                </div>
              </div>
              <h3>{article.title || "Untitled article"}</h3>
              {article.publishedAt && (
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              )}
              {article.description && <p>{article.description}</p>}
              {article.url && (
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
