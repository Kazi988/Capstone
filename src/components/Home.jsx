import { useState } from "react";
import { useEffect } from "react";

function Home({ token, user, setUser }) {
  useEffect(() => {
    async function fetchuser() {
      try {
        const response = await fetch("https://fakestoreapi.com/users/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log(result);

        const retrieveuser = result.filter((user1) => user1.username === user);
        setUser(retrieveuser[0]);
        localStorage.setItem(user);
        console.log(retrieveuser);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchuser();
  }, []);
  console.log(user);

  return (
    <>
      <div>Welcome{user && user.username}</div>
      <div className="homepage-container">
        <img className="gif" src="public/video.gif" alt="Description of GIF" />
      </div>
    </>
  );
}

export default Home;
