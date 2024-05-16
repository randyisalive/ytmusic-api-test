import { ProgressSpinner } from "primereact/progressspinner";

function Loading() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <ProgressSpinner />
    </div>
  );
}

export default Loading;
