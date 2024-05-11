import { Link } from "react-router-dom";

const Login = () => (
  <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-32">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form action="" className="max-w-md mx-auto">
        <input type="email" name="" id="" placeholder="your@email.com" />
        <input type="password" name="" id="" placeholder="password" />
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

export default Login;
