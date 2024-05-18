import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { inputHandler } from "../helper";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const login = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { message },
      } = await axios.post("/login", { email, password });
      alert(message);
      setRedirect(true);
    } catch (e) {
      console.log(e);
      alert("Email or password wrong.");
    }
  };

  return redirect ? (
    <Navigate to={"/"} />
  ) : (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={login} className="max-w-md mx-auto">
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
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            {"Don't have an account yet?"}{" "}
            <Link to={"/register"} className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
