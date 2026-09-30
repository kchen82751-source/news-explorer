import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
// import CurrentSearchUnitContext from "../../contexts/CurrentSearchUnitContext";

function Main({ searchData, onArticleClick, articleItems, handleBookmark }) {
  // const { currentSearchUnit } = useContext(CurrentSearchUnitContext);
  return (
    <main className="main">
      <SearchForm searchData={searchData} />
      <section className="main__clothes">
        {/* <p className="main__description">
          Today is {searchData.temp[currentSearchUnit]} &deg;{" "}
          {currentSearchUnit} / You may want to wear:
        </p> */}
        <ul className="main__items">
          {articleItems
            .filter((card) => {
              return card.search === searchData.type;
            })
            .map((filteredCard) => {
              return (
                <NewsCard
                  key={filteredCard._id}
                  item={filteredCard}
                  onArticleClick={onArticleClick}
                  handleBookmark={handleBookmark}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
