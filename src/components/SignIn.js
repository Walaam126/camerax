import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sigin } from "../store/actions/authAction";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pass, setpass] = useState("password");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sigin(user, history));
  };

  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h2> Sign in</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" for="form4Example1">
                Username
              </label>
              <input
                type="text"
                id="form4Example1"
                className="form-control"
                name="username"
                onChange={handleChange}
                value={user.username}
              />
            </div>
            <label className="form-label" for="form4Example2">
              Password
            </label>
            <div className="input-group mb-4">
              <input
                type={pass}
                id="form4Example2"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
              <span class="input-group-text" id="basic-addon2">
                {pass === "password" ? (
                  <AiFillEye size="1.5em" onClick={showPass} />
                ) : (
                  <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                )}
              </span>{" "}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 float-end"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default SignIn;
