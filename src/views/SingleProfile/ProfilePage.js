import React from "react";
import SearchBar from "../../componenets/SearchBar/SearchBar";
import Header from "../../componenets/Header/Header";

import SingleProfile from "../../componenets/Profiles/SingleProfile";

function ProfilePage(props) {
  console.log(props.match.params.username);
  return (
    <>
      <Header />
      <SearchBar />
      <SingleProfile username={props.match.params.username} />
    </>
  );
}

export default ProfilePage;
