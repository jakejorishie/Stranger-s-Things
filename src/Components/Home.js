import React, {useState, useEffect } from 'react';
import {getUser} from "../api/api";
const Home = ({ isLoggedIn }) => {
const [user, setUser] = useState("");
console.log(user)
useEffect(() => {
    getUser()
            .then( results => {setUser(results) 
                console.log(results)}).catch( error => console.error(error))
}, []);
    return (
    <>
    {isLoggedIn ? (
    <div>
        <h2 id="home-title">Logged In As {user.data.username}</h2>
        </div>
    ) : (<div></div>)
}
    </>
    )
}
export default Home;