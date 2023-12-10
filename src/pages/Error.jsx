import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const errorMessage = error?.message || "Page not found";

  return (
    <div className="error">
      <h1 className="error__title">Error</h1>
      <p className="error__description">{errorMessage}</p>
      {/* Navigation back to home or other appropriate action */}
    </div>
  );  
}
