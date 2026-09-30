import "../../components/SearchForm/SearchForm.css";
import {} from "../../utils/constants";
import { useContext } from "react";
// import CurrentSearchUnitContext from "../../contexts/CurrentSearchUnitContext";

function SearchForm({ searchData }) {
  // const { currentSearchUnitContext } = useContext(CurrentSearchUnitContext);

  return (
    <section>
      <div className="search__header-statement">
        <h1 className="search__header">
          Search results
          {/* <p className="search-card__name">
        {searchData.temp[currentSearchUnitContext]} &deg;{" "}
        {currentSearchUnitContext}
      </p> */}
        </h1>
        <button className="search__show-more">Show more</button>
      </div>
    </section>
  );
}

export default SearchForm;
