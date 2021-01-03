import React from "react";
import Header from "../../componenets/Header/Header";
import SearchBar from "../../componenets/SearchBar/SearchBar";
import FavouriteProfiles from "../../componenets/Profiles/FavouriteProfiles";

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
