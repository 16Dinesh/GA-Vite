import React, { useState, useEffect } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

// Debounce function to avoid too many search triggers
const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default function SearchBar() {
  const [query, setQuery] = useState(""); // State to hold the search input

  // Handler for input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Search submit handler (for both form submit and button click)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Add the search logic here
      console.log("Searching for:", query);
    }
  };

  const handleSearchClick = () => {
    setQuery(""); // Clear the input text
  };

  // Debounced search function to avoid too many re-renders on typing
  const debouncedSearch = debounce(handleSearchSubmit, 300);

  useEffect(() => {
    if (query) {
      debouncedSearch();
    }
  }, [query]);

  return (
    <div className="search-space">
      <form className="search-container" onSubmit={handleSearchSubmit}>
        {/* Conditionally render the search icon based on the input */}
        {query === "" && (
          <button
            className="search-btn"
            type="submit"
            aria-label="Search button"
          >
            <SearchIcon fontSize="large" />
          </button>
        )}
        <input
          className="search-input"
          type="text"
          name="query"
          id="searchInput"
          placeholder="What do you need help with..?"
          autoComplete="off"
          value={query}
          onChange={handleInputChange}
          onFocus={handleSearchClick} // Clear text on focus
        />
      </form>
    </div>
  );
}
