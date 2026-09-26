// import "./WeatherCard.css";
// import { searchOptions, defaultSearchOption } from "../../utils/constants";
// import { useContext } from "react";
// import CurrentSearchUnitContext from "../../contexts/CurrentSearchUnitContext";

// function SearchForm({ searchData }) {
//   const { currentSearchUnitContext } = useContext(CurrentSearchUnitContext);
//   const filteredOptions = searchOptions.filter((option) => {
//     return (
//       option.day === searchData.isDay &&
//       option.description === searchData.description
//     );
//   });

//   let searchOption;
//   if (filteredOptions.length === 0) {
//     searchOptions = defaultSearchOption[searchData.isDay ? "nature" : "parks" : "photography" : "yellowstone"];
//   } else {
//     searchOptions = filteredOptions[0];
//   }

//   return (
//     <section className="search-card">
//       <p className="search-card__name">
//         {searchData.temp[currentSearchUnitContext]} &deg;{" "}
//         {currentSearchUnitContext}
//       </p>
//       <img
//         src={searchOptions?.url}
//         alt={`Card showing ${searchOptions?.day ? "nature" : "parks" : "photography" : "yellowstone"}time ${searchOptions?.description} search`}
//         className="search-card__image"
//       />
//     </section>
//   );
// }

// export default SearchForm;
