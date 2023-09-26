import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function LogIn({ setToken, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    try {
      const result = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log(result);
      const response = await result.json();
      setToken(response.token);
      setUser(username);
      // console.log(token);
      localStorage.setItem("token", response.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <form id="loginform" onSubmit={handleSubmit}>
        <div className="form-group">
          <label id="labelusername">
            {" "}
            Username:{" "}
            <input
              className="form-control"
              id="inputusername"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <label id="labelpassword">
            {" "}
            Password:{" "}
            <input
              type="password"
              className="form-control"
              id="inputpassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group form-check">
          <label className="form-check-label">
            {" "}
            Remember me?{" "}
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              placeholder="checkbox"
              value={checkbox}
              onChange={(e) => {
                setCheckbox(e.target.value);
              }}
            />{" "}
          </label>
        </div>
        <button
          // onClick={(e) => {
          //   e.preventDefault;
          //   navigate("/");
          // }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default LogIn;
