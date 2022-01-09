import React from "react";
import ProfileCard from "./ProfileCard";
import Loading from "../loader/Loading";
import PageNotFound from "../page-not-found/PageNotFound";
import Organization from "../organization/Organization";
import fetchData from "../../api/index";
import "./profile.scss";

function SingleProfile({ username }) {
  const { data, loading } = fetchData(`https://api.github.com/users/${username}`);

  if (loading) {
    return <Loading size={350} />;
  }
  if (data) {
    return (
      <section id="profile">
        <div className="container">
          <div className="profile-wrapper">
            <ProfileCard profile={data} newTab={true} />
            <Organization username={data.login} />
          </div>
        </div>
      </section>
    );
  }
  return <PageNotFound />;
}

export default SingleProfile;
