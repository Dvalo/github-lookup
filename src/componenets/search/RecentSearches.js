import { Link } from "react-router-dom";

function RecentSearches({ searches }) {
  return (
    <div className="recent-searches">
      <span>Recent Searches</span>
      {searches.map((search) => {
        return (
          <div className="recent-search" key={search}>
            <Link to={`/${search}`}>{search}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecentSearches;
