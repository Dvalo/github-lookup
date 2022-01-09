import React from "react";
import GetData from "../../api/index";
import Repositories from "../Repositories/Repositories";

import "./Organization.scss";

function Organization(props) {
  const { data } = GetData(`https://api.github.com/users/${props.username}/orgs`);

  if (data) {
    if (data.length !== 0) {
      return (
        <>
          <div className="notif-message">
            <span>{props.username}</span> is part of the following organizations.
          </div>
          <div className="orgs">
            {data.map(function (org, index) {
              return (
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
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <div className="notif-message empty">
          <span>{props.username}</span> is not part of any organization.
        </div>
      );
    }
  }
  return <div />;
}

export default Organization;
