import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const value = useSelector((state) => {
    return state.user;
  });

  console.log(value);

  return (
    <div>
      <header>
        <div className="menu">
          <ul className="ull">
            {value.currentUser ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">
                    <img
                      className="imageTagset"
                      src={value?.currentUser?.profilePicture}
                      alt=""
                    />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
