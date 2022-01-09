import React from "react";
import { Link } from "react-router-dom";
import fetchData from "../../api";
import Loading from "../loader/Loading";

import "./page-not-found.scss";

function PageNotFound() {
  const { data, loading } = fetchData("https://api.github.com/rate_limit");
  const apiReset = data && new Date(data.rate.reset * 1000);
  const msDifference = apiReset - new Date();
  const minDifference = Math.round(((msDifference % 86400000) % 3600000) / 60000);

  if (loading) {
    return <Loading size={350} />;
  }
  return (
    <div className="nf-page">
      <div className="container">
        <div className="content-wrap">
          {data && data.rate.remaining === 0 ? (
            <h3 className="heading">
              Looks like you&apos;ve reached GitHub&apos;s api rate limit!
              <br />
              <span className="small">
                Try again in {minDifference && <b>{minDifference}</b>} minutes
              </span>
            </h3>
          ) : (
            <>
              <div className="wrap_404">
                <div className="numb">4</div>
                <div className="icon">
                  <i className="fas fa-spinner fa-spin"></i>
                </div>
                <div className="numb">4</div>
              </div>
              <h3 className="heading">Looks like you&apos;re lost!</h3>
              <p className="desc">
                The page you are looking for could not be found.{" "}
                <span className="small">
                  Unless you were looking for this error page, in which case you found it ;)
                </span>
                <br />
              </p>
              <Link to="/" className="go-back">
                Go to Home
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
