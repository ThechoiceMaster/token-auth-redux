import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./../actions/loginAction";
import "../index.css"

export default function LoginScreen(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Login(email, password));
  };

  return (
    <div className="container-fluid">
      <form onSubmit={submitHandler}>
        <h1 className="center">Login</h1>
        {loading && <div className="loader"></div>}
        {error && <div>{error}</div>}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
