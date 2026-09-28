import "../../components/SearchForm/SearchForm.css";
import {} from "../../utils/constants";
import { useContext } from "react";
// import CurrentSearchUnitContext from "../../contexts/CurrentSearchUnitContext";

function SearchForm({ searchData }) {
  const { currentSearchUnitContext } = useContext(CurrentSearchUnitContext);

  return (
    <section className="search-card">
      <p className="search-card__name">
        {searchData.temp[currentSearchUnitContext]} &deg;{" "}
        {currentSearchUnitContext}
      </p>
      <img
        src={articleOptions?.url}
        // alt={`Card showing ${articleOptions?.day ? "nature" : "parks" : "photography" : "yellowstone"}time ${articleOptions?.description} search`}
        className="search-card__image"
      />
    </section>
  );
}

export default SearchForm;
