import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./search-bar.scss";

function SearchBar() {
  const { push } = useHistory();
  const [profileName, setProfileName] = useState("");
  const [recentSearches, setRecentSearches] = useState(
    localStorage.getItem("recent-searches")
      ? JSON.parse(localStorage.getItem("recent-searches"))
      : []
  );
  const [inputFocused, setInputFocused] = useState("not-focused");

  const handleDescChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleFocusChange = (status) => {
    status ? setInputFocused("focused") : setInputFocused("not-focused");
  };

  const updateRecentSearches = () => {
    if (localStorage.getItem("recent-searches") !== null) {
      let recentSearchesStorage = JSON.parse(localStorage.getItem("recent-searches"));
      recentSearchesStorage.unshift(profileName);
      localStorage.setItem("recent-searches", JSON.stringify(recentSearchesStorage.slice(0, 3)));
    } else {
      localStorage.setItem("recent-searches", JSON.stringify([profileName]));
    }
    setRecentSearches(JSON.parse(localStorage.getItem("recent-searches")));
  };

  const handleSearch = () => {
    push({
      pathname: `/${profileName}`
    });
    updateRecentSearches();
  };

  const handleClick = (redirect) => {
    push({
      pathname: `/${redirect}`
    });
  };

  const displayRecentSearches = () => {
    if (recentSearches.length > 0) {
      return (
        <div className="recent-searches">
          <span>Recent Searches</span>
          {recentSearches.map((search) => {
            return (
              <div className="recent-search" key={search}>
                <Link to={`/${search}`} onMouseDown={() => handleClick(search)}>
                  {search}
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div id="search-bar" className={inputFocused}>
      <div className="container">
        <div className="search-bar-wrapper">
          <div className="form-group has-search profile-search">
            <span className="fa fa-search form-icon"></span>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Search by profile name..."
              onBlur={() => handleFocusChange(false)}
              onFocus={() => handleFocusChange(true)}
              spellCheck="false"
              onChange={handleDescChange}
            />
          </div>

          <div className="form-group search-btn">
            <button type="button" className="custom-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        {displayRecentSearches()}
      </div>
    </div>
  );
}

export default SearchBar;
