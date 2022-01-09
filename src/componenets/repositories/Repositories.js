import React from "react";
import GetData from "../../api/index";
import Loading from "../loader/Loading";

import "./repository.scss";

function Repositories({ type, username }) {
  const { loading, data } = GetData(`https://api.github.com/${type}/${username}/repos`);

  if (loading) {
    return <Loading size={50} />;
  }
  if (data && data.length !== 0) {
    return (
      <div className="repositories">
        {data.slice(0, 3).map((repo) => (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repository"
            key={repo.name}>
            {repo.name}
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="notif-message repos empty">
      <span>{username}</span> does not have any repositories.
    </div>
  );
}

export default Repositories;
