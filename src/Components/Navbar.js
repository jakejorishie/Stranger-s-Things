import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div id="nav-bar" style={{ position: "sticky" }}>
      <h3 id="nav-title">STRANGER'S THINGS</h3>
      <div id="nav-links">
        <div>
          {isLoggedIn ? (
            <div>
              <span>
                <Link to="/home">HOME</Link>
              </span>
              <span>
                <Link to="/posts">POSTS</Link>
              </span>
              <span>
                <Link to="/profile">PROFILE</Link>
              </span>
              <span>
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  LOGOUT
                </Link>
              </span>
            </div>
          ) : (
            <div>
              <div>
                <span>
                  <Link to="/posts">POSTS</Link>
                </span>
                <span>
                  <Link to="/login">LOGIN</Link>
                </span>
                <span>
                  <Link to="/register">REGISTER</Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
