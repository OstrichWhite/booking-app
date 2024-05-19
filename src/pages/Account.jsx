import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useParams } from "react-router-dom";

export default function Account() {
  const { user, ready } = useContext(UserContext);
  const { subpage = "profile" } = useParams();

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Link to={"/login"} />;
  }

  const isActive = (page) => {
    let classes = "px-6 py-2";
    page === subpage && (classes += " bg-primary text-white rounded-full");
    return classes;
  };

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
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
    </div>
  );
}
