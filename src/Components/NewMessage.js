import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../api/api";

const CreateMessage = (props) => {
  const [postId] = [props.postId];
  const [messageCont, setMessageCont] = useState("");
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/profile");
  };
  const navigatePosts = () => {
    navigate("/posts");
  };

  return (
    <div className="createMessage">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await sendMessage(postId, messageCont);
          setMessageCont("");
          navigateProfile();
        }}
      >
        <h1 id="new-message-header" htmlFor="message">
          Message
        </h1>
        <fieldset className="messageFieldset">
          <textarea
            rows={"5"}
            cols={50}
            minLength={1}
            id="message"
            type="text"
            placeholder="Message"
            value={messageCont}
            onChange={(event) => {
              event.preventDefault();
              setMessageCont(event.target.value);
            }}
          />
        </fieldset>
        <button className="m-button" type="submit">
          Send Message
        </button>
        <button className="m-button" onClick={navigatePosts}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;
