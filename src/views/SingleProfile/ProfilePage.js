import React from "react";
import SearchBar from "../../componenets/SearchBar/SearchBar";
import Header from "../../componenets/Header/Header";

import SingleProfile from "../../componenets/Profiles/SingleProfile";

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
