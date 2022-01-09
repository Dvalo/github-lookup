import { Link } from "react-router-dom";
import Repositories from "../repositories/Repositories";

function ProfileCard({ profile, newTab }) {
  const { type, avatar_url, login, html_url } = profile;
  const imgSize = type === "User" ? 164 : 124;

  return (
    <div className={`profile-card ${type || "Org"}`}>
      <div className="profile-type">{type || "Org"}</div>
      <div className="avatar">
        <img src={avatar_url} alt={login} width={imgSize} height={imgSize}></img>
      </div>
      <div className="profile-details-wrap">
        <div className="username-wrap">
          {newTab ? (
            <a href={html_url} className="username" target="_blank" rel="noreferrer">
              {login}
            </a>
          ) : (
            <Link to={`/${login}`} className="username">
              {login}
            </Link>
          )}
        </div>
        <Repositories type="users" username={login} />
      </div>
    </div>
  );
}

export default ProfileCard;
