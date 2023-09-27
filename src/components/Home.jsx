import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Home({ token, user, setUser }) {
  const scrolling = useRef();
  function handleScroll() {
    scrolling.current.scrollIntoView({ behavior: "smooth" });
  }

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
      <MDBCarousel showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="public/test3 (1) (1).jpg"
          alt="..."
        >
          {" "}
          <div className="carouseltext">
            <h1 className="caroustext">
              <span className="spanwelcome">Welcome </span>
              <span className="spanwelcome">To</span>
              <span className="spanwelcome">Urban</span>
              <span className="spanwelcome">Essentials</span>
              <span className="spanwelcome">{user && user.username}</span>
            </h1>
          </div>
          <div onClick={handleScroll} className="arrowbuttonhome">
            <ExpandMoreIcon />
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="public/test4.jpg"
          alt="..."
        >
          {" "}
          <div className="carouseltext">
            <span className="spanwelcome">Empowering </span>
            <span className="spanwelcome">Your</span>
            <span className="spanwelcome">Style</span>

            <span className="spanwelcome">With</span>
            <span className="spanwelcome">Elegance</span>
          </div>
          <div onClick={handleScroll} className="arrowbuttonhome">
            <ExpandMoreIcon />
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="public/test5.jpg"
          alt="..."
        >
          {" "}
          <div className="carouseltext">
            <span className="spanwelcome">Summer </span>
            <span className="spanwelcome">Collection</span>
            <span className="spanwelcome">Now</span>
            <span className="spanwelcome">Half</span>
            <span className="spanwelcome">Off!</span>
          </div>
          <div onClick={handleScroll} className="arrowbuttonhome">
            <ExpandMoreIcon />
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
      <div ref={scrolling} className="homepagevideo">
        <video src="public/video.mp4" controls autoPlay muted />
      </div>
    </>
  );
}

export default Home;
