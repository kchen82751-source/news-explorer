import "./Main.css";
import SearchResult from "../SearchResult/SearchResult";
import Header from "../Header/Header";
import About from "../../components/About/About";

function Main({
  newsData,
  isLoggedIn,
  handleLoginClick,
  handleSignOut,
  handleGetNews,
  handleHomeClick,
  articles,
  isLoading,
  searchError,
  hasSearched,
  savedArticles,
  handleSaveArticle,
}) {
  return (
    <main>
      <Header
        newsData={newsData}
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        onSignOut={handleSignOut}
        onSearch={handleGetNews}
        handleHomeClick={handleHomeClick}
      />
      <SearchResult
        articles={articles}
        hasSearched={hasSearched}
        isLoading={isLoading}
        error={searchError}
        isLoggedIn={isLoggedIn}
        savedArticles={savedArticles}
        onSave={handleSaveArticle}
        onLogin={handleLoginClick}
      />
      <About />
    </main>
  );
}

export default Main;
