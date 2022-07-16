// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { newPost } from "../api/api";


// const NewPost = (props) => {
//   const [token, setNewPost] = [props.token, props.NewPost];
//   const [price, setPrice] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [deliveryBox, setDeliveryBox] = useState(false);
//   const navigate = useNavigate();
//   const navigatePost = () => {
//     navigate("/posts")
//   }

//   return (
//     <div className="newPost">
//       <form
//         onSubmit={async(event) => {
       
//           event.preventDefault();
//           const postObj = {
//             title: title,
//             description: description,
//             price: price,
//             willDeliver: deliveryBox,
//           };
//           await newPost(postObj, token);
//           setNewPost(false);
//         }}
//       > 
//         <div className="newInputs">
//           <label htmlFor="title">New Post Title</label>
//         <fieldset className="newfieldset">
//           <input
//           size={'58'}
//             minLength={1}
//             id="title"
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(event) => {
//               event.preventDefault();
//               setTitle(event.target.value);
//             }}
//           />
//         </fieldset>
//           <label htmlFor="description">New Post Description</label>
//         <fieldset className="newfieldset" >
//           <textarea
//           rows={'5'}
//           cols="50"
//             minLength={1}
//             id="description"
//             type="text"
//             placeholder="Description"
//             value={description}
//             onChange={(event) => {
//               event.preventDefault();
//               setDescription(event.target.value);
//             }}
//           />
//         </fieldset>
//           <label htmlFor="price">New Post Price</label>
//         <fieldset className="newfieldset" >
//           <input
//           size={'58'}
//             minLength={1}
//             id="price"
//             type="text"
//             placeholder="$"
//             value={price}
//             onChange={(event) => {
//               event.preventDefault();
//               setPrice(event.target.value);
//             }}
//           />
//         </fieldset>
//         <fieldset className="newfieldset">
//           <label  htmlFor="deliveryAvailability">Available For Delivery?</label>
//           <input className="checkbox"
//             id="willDeliver"
//             type="checkbox"
//             onChange={() => {
//               setDeliveryBox(!deliveryBox);
//             }}
//           />
//         </fieldset>
//         </div>
//         <button className="newPostButton" type="button" onClick={navigatePost}>Submit New Post</button>
//         <button className="cancelButton"
//           onClick={() => {
//             setNewPost(false);
//           }}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewPost;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPosts } from "../api/api";
//all the way at bottom of posts
const NewPosts = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [deliver, willDeliver] = useState(false);
  const navigate= useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      description: description,
      price: price,
      location: location,
      deliver: deliver,
    };
    await createPosts(newPost);
    navigateNew();
  }

  const navigateNew = () => {
    navigate("/posts");
    };
  return (
    <div id="newPostBox">
      <form id="newPost" onSubmit={handleSubmit}>
        <label className="postTitles">Title:</label>
        <br />
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          size={'58'}
          minLength={1}
          type="text"
          title="title"
          value={title}
          required
        />
        <br />
        <label className="postTitles">Description:</label>
        <br />
        <input
        size={'58'}
        minLength={1}
        id="descriptionID"
        onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="text"
          description="description"
          value={description}
          required
        />
        <br />
        <label className="postTitles">Price:</label>
        <br />
        <input
          placeholder="$"
          id="price-box"
          size={'5'}
          className="postTitles"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="text"
          price="price"
          value={price}
          required
        />
        <br />
        <label className="postTitles">Location:</label>
        <br />
        <input
        size={'58'}
        minLength={1}
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        ></input>
        <div className="postTitles">
          <input
            id="checkbox"
            className="postTitles"
            onChange={(event) => {
              willDeliver(event.target.checked)
              console.log(event.target.checked);
            }}
            type="checkbox"
            name="delivery"
            checked={deliver}
          />
          Will Deliver
        </div>
        <button className="submitPost" type="submit">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default NewPosts;
