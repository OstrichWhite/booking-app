import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { inputHandler } from "../helper";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register", { name, email, password });
      alert("Registration successfull now you can login.");
    } catch (e) {
      alert("Registration failed, Try again later.");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            value={name}
            onChange={inputHandler(setName)}
            placeholder="John Doe"
          />
          <input
            type="email"
            value={email}
            onChange={inputHandler(setEmail)}
            placeholder="your@email.com"
          />
          <input
            type="password"
            value={password}
            onChange={inputHandler(setPassword)}
            placeholder="password"
          />
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            {"Already have an account?"}{" "}
            <Link to={"/login"} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
