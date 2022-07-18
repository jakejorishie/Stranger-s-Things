import React, { useState, useEffect } from "react";
import { getUser } from "../api/api";
const Home = ({ isLoggedIn }) => {
  const [user, setUser] = useState({ data: {} });
  useEffect(() => {
    getUser()
      .then((results) => {
        setUser(results);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="main">
      {isLoggedIn ? (
        <div>
          <div id="welcome" className="main">
            <h2>Welcome To</h2>
            <h1 id="welcome-title" style={{ textDecorationLine: "underline" }}>
              STRANGER'S THINGS
            </h1>
            <h2>A Monstorous Virtual Market Place Experience</h2>
            <h2>Buy Or Sell Or Run</h2>
          </div>
          <h2 id="home-title">Logged In As {user.data.username}</h2>
        </div>
      ) : null}
    </div>
  );
};
export default Home;
