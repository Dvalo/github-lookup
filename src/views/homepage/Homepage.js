import React from "react";
import Header from "../../componenets/header/Header";
import SearchBar from "../../componenets/search/SearchBar";
import FavouriteProfiles from "../../componenets/profile/FavouriteProfiles";

function Homepage() {
  return (
    <>
      <Header />
      <SearchBar />
      <FavouriteProfiles />
    </>
  );
}

export default Homepage;
