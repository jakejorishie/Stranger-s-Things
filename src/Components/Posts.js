import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../api/api";

const Posts = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const navigateNew = () => {
    navigate("/newpost");
  };

  useEffect(() => {
    fetchPosts()
      .then((results) => {
        setPosts(results);
      })
      .catch((error) => console.error(error));
  }, []);

  const removePost = async (post) => {
    if (post.active === true) {
      await deletePost(post._id);
      await fetchPosts()
        .then((results) => {
          setPosts(results);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <div className="main">
        <input
          id="search-posts"
          placeholder="Search Posts"
          value={searchTerm}
          onChange={(event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          }}
        />
        <span>
          {isLoggedIn ? (
            <button
              id="new-post-button"
              className="m-button"
              onClick={navigateNew}
            >
              Create New Post
            </button>
          ) : null}
        </span>
      </div>
      {posts
        .filter((post) => {
          if (searchTerm === "") {
            return post;
          } else if (
            post.author._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.username
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            post.location.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return post;
        })
        .map((post) => (
          <div className="post-box" key={post._id}>
            <h2 style={{ textDecorationLine: "underline" }}>{post.title}</h2>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <h3>Seller: {post.author.username}</h3>
            <p>Location: {post.location}</p>
            {isLoggedIn && post.isAuthor === false ? (
              <button className="m-button">
                <Link to={`/newmessage/${post._id}`}>Message User</Link>
              </button>
            ) : null}
            {post.isAuthor ? (
              <button className="m-button" onClick={() => removePost(post)}>
                Delete
              </button>
            ) : null}
            <br />
          </div>
        ))}
    </>
  );
};
export default Posts;
