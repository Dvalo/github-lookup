import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import Loading from "../loader/Loading";
import PageNotFound from "../page-not-found/PageNotFound";
import GetData from "../../api/index";

import "./profile.scss";

function FavouriteProfiles() {
  const [view, setView] = useState(
    localStorage.getItem("view") === null ? "list" : localStorage.getItem("view")
  );

  const { data, loading, error } = GetData("https://api.github.com/users");

  const handleViewChange = (newView) => {
    localStorage.setItem("view", newView);
    setView(newView);
  };

  if (error) {
    return <PageNotFound />;
  }
  if (loading) {
    return <Loading size={350} />;
  }
  if (data) {
    return (
      <>
        <section id="favourite-profiles" className={view}>
          <div className="container">
            <div className="view-wrap">
              <i
                className="view-icon view-list fas fa-list"
                onClick={() => handleViewChange("list")}></i>
              <i
                className="view-icon view-grid fas fa-th-large"
                onClick={() => handleViewChange("grid")}></i>
            </div>
            <div className="profile-wrapper">
              {data.map((profile) => (
                <ProfileCard profile={profile} newTab={false} key={profile.login} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return <div />;
}

export default FavouriteProfiles;
