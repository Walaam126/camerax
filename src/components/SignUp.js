import React from "react";
import { useState } from "react";
import { signup } from "../store/actions/authAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pass, setpass] = useState("password");
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h2> Sign up</h2>
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
            <div className="form-outline mb-4">
              <label className="form-label" for="form4Example1">
                Email
              </label>
              <input
                type="text"
                id="form4Example1"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form4Example1">
                First Name
              </label>
              <input
                type="email"
                id="form4Example1"
                className="form-control"
                name="firstName"
                onChange={handleChange}
                value={user.firstName}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form4Example1">
                last Name
              </label>
              <input
                type="text"
                id="form4Example1"
                className="form-control"
                name="lastName"
                onChange={handleChange}
                value={user.lastName}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 float-end"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default SignUp;
