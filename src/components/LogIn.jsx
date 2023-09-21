import { useState } from "react";
import "./Login.css";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

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
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      console.log(result);
      const response = await result.json();
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LogIn;
