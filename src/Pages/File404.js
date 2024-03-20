import React from "react";
import { Link } from "react-router-dom";

function File404() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Go To The <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

export default File404;
