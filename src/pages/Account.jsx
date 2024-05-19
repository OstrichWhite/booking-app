import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const { user, setUser } = useContext(UserContext);
  const { subpage = "profile" } = useParams();
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    await axios.post("/logout");
    setUser(null);
    setRedirect(true);
  };

  if (redirect) return <Navigate to={"/"} />;

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const isActive = (page) => {
    let classes = "px-6 py-2";
    page === subpage && (classes += " bg-primary text-white rounded-full");
    return classes;
  };

  return (
    <div>
      <nav className="w-full flex justify-center my-8 gap-2">
        <Link className={isActive("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={isActive("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={isActive("places")} to={"/account/places"}>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button className="primary max-w-sm mt-2" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
