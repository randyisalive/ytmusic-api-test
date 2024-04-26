import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

function Loading() {
  return (
    <div className="d-flex ">
      <ProgressSpinner />
    </div>
  );
}

export default Loading;
