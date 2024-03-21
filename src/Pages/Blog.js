import { useState } from "react";
import { Navigate } from "react-router-dom";

function Blog() {
  const [user, setUser] = useState("Boris");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <h2>Blog Page</h2>
      <p> Welcome To Blog Page </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default Blog;
