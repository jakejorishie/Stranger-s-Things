import React, { useState, useEffect } from "react";
import { getUser } from "../api/api";
import { fetchPosts } from "../api/api";

const Profile = ({ isLoggedIn }) => {
  const [user, setUser] = useState({ data: {} });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getUser()
      .then((results) => {
        setUser(results);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetchPosts()
      .then((results) => {
        setPosts(results);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1 className="message-header">Messages To {user.data.username}</h1>
          {posts.map((post) => {
            return (
              <>
                {post.isAuthor ? (
                  <div key={post.isAuthor.id}>
                    {post.messages.map((message) => {
                      return (
                        <div className="messages">
                          <h2
                            key={message.fromUser.username}
                            className="message-writer"
                          >
                            Message From: {message.fromUser.username}
                          </h2>
                          <h3 className="message-title">{post.title}</h3>
                          <p>{message.content}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </>
            );
          })}
          <br />
          <h1 className="message-header">Messages From {user.data.username}</h1>
          {user?.data?.messages?.map((info) => {
            return (
              <div className="messages" key={info.id}>
                <h1 className="message-sent">Sent</h1>
                <h2 className="message-title">{info.post.title}</h2>
                <p>{info.content}</p>
              </div>
            );
          })}
        </>
      ) : null}
      </>
  );
};

export default Profile;
