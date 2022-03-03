import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <input
        style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px" }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px" }} 
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{width:100, padding:10}} onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
