import React from "react";
import GetData from "../../api/index";

import "./Repositories.scss";

function FavouriteProfiles(props) {
  const { data } = GetData(
    `https://api.github.com/${props.type}/${props.username}/repos`
  );

  if (data) {
    if (data.length !== 0) {
      return (
        <div className="repositories">
          {data.slice(0, 3).map(function (repo, index) {
            return (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="repository"
                key={repo.name}
              >
                {repo.name}
              </a>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="notif-message repos empty">
          <span>{props.username}</span> does not have any repositories.
        </div>
      );
    }
  }
  return <div />;
}

export default FavouriteProfiles;
