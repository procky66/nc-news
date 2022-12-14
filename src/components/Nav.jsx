import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/topics">Topics</Link>
      </p>
    </div>
  );
}

export default Nav;
