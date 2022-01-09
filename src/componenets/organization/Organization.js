import React from "react";
import GetData from "../../api/index";
import Loading from "../loader/Loading";
import ProfileCard from "../profile/ProfileCard";

import "./organization.scss";

function Organization({ username }) {
  const { loading, data } = GetData(`https://api.github.com/users/${username}/orgs`);

  if (loading) {
    return <Loading size={50} />;
  }
  if (data && data.length !== 0) {
    return (
      <>
        <div className="notif-message">
          <span>{username}</span> is part of the following organizations.
        </div>
        <div className="orgs">
          {data.map((org) => (
            <ProfileCard profile={org} newTab={true} key={org.login} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="notif-message empty">
      <span>{username}</span> is not part of any organization.
    </div>
  );
}

export default Organization;
