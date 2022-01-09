import React from "react";
import { Link } from "react-router-dom";

import "./page-not-found.scss";

function PageNotFound() {
  return (
    <div className="nf-page">
      <div className="container">
        <div className="content-wrap">
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
            <span className="small">
              Honestly you just probably reached GitHub&apos;s api rate limit, give it a few
              minutes.
            </span>
          </p>
          <Link to="/" className="go-back">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
