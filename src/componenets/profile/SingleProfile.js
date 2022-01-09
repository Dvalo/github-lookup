import React from "react";
import Loading from "../loader/Loading";
import PageNotFound from "../page-not-found/PageNotFound";
import Repositories from "../repositories/Repositories";
import Organization from "../organization/Organization";
import GetData from "../../api/index";
import "./profile.scss";

function SingleProfile(props) {
  const currentUsername = props.username;
  const { data, loading, error } = GetData(`https://api.github.com/users/${currentUsername}`);

  if (error) {
    return <PageNotFound />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <section id="profile">
        <div className="container">
          <div className="profile-wrapper">
            <div className="profile-card">
              <div className="profile-type">{data.type}</div>
              <div className="avatar">
                <img src={data.avatar_url} alt={data.login} width="164" height="164"></img>
              </div>
              <div className="profile-details-wrap">
                <div className="username-wrap">
                  <a href={data.html_url} className="username" target="_blank" rel="noreferrer">
                    {data.login}
                  </a>
                </div>
                <Repositories type="users" username={data.login} />
              </div>
            </div>
            <Organization username={data.login} />
          </div>
        </div>
      </section>
    );
  }
  return <div />;
}

export default SingleProfile;
