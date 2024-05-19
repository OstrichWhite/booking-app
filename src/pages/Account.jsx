import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function Account() {
  const { user, ready } = useContext(UserContext);
  if (!ready) {
    return "Loading...";
  }
  if (ready && !user) {
    return <Link to={"/login"} />;
  }
  return <div>Account page for {user.name}</div>;
}
