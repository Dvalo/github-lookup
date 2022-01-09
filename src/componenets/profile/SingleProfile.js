import React from "react";
import ProfileCard from "./ProfileCard";
import Loading from "../loader/Loading";
import PageNotFound from "../page-not-found/PageNotFound";
import Organization from "../organization/Organization";
import GetData from "../../api/index";
import "./profile.scss";

function SingleProfile({ username }) {
  const { data, loading, error } = GetData(`https://api.github.com/users/${username}`);

  if (error) {
    return <PageNotFound />;
  }
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
  return <div />;
}

export default SingleProfile;
