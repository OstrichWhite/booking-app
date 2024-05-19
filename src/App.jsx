import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Account from "./pages/Account";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
const App = () => (
  <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account/:subpage?" element={<Account />} />
      </Route>
    </Routes>
  </UserContextProvider>
);

export default App;
