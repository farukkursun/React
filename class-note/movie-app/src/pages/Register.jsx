import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/AuthContext";

const Register = () => {
  const { register, setRegisterEmail, setRegisterPassword } =
    useContext(MovieContext);
  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input
          placeholder="email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>
    </div>
  );
};

export default Register;
