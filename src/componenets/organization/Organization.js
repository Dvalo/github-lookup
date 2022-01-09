import React from "react";
import GetData from "../../api/index";
import Loading from "../loader/Loading";
import Repositories from "../repositories/Repositories";

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
            <div className="org-card" key={org.login}>
              <div className="profile-type">Org</div>
              <div className="org-image">
                <img src={org.avatar_url} alt={org.login} width="124" height="124" />
              </div>
              <div className="org-details-wrap">
                <div className="username-wrap">
                  <a
                    href={`https://github.com/${org.login}`}
                    target="_blank"
                    rel="noreferrer"
                    className="username">
                    {org.login}
                  </a>
                </div>
              </div>
              <Repositories type="orgs" username={org.login} />
            </div>
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
