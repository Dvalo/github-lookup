import { Rings } from "react-loader-spinner";

import "./loading.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading({ size }) {
  return (
    <div className="container loading-wrapper">
      <Rings height={size} width={size} color="#26de80" arialLabel="loading" />
    </div>
  );
}

export default Loading;
