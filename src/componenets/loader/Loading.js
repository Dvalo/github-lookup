import { Rings } from "react-loader-spinner";

import "./loading.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
  return (
    <div className="container loading-wrapper">
      <Rings height="350" width="350" color="#26de80" arialLabel="loading" />
    </div>
  );
}

export default Loading;
