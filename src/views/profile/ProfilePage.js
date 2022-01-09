import React from "react";
import SearchBar from "../../componenets/search/SearchBar";
import Header from "../../componenets/header/Header";

import SingleProfile from "../../componenets/profile/SingleProfile";

function ProfilePage(props) {
  const { username } = props.match.params;
  return (
    <>
      <Header />
      <SearchBar />
      <SingleProfile username={username} />
    </>
  );
}

export default ProfilePage;
