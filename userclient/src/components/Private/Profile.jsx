import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="avatar">
          <img
            src="https://assets.codepen.io/5453939/internal/avatars/users/default.png?format=auto&amp;version=1638034680&amp;width=300&amp;height=300"
            alt="User Avatar"
          />
        </div>
        <div>
          <h3>Usman Kabir</h3>
        </div>
        <div>
          <div>
          <input className="inputSeprate" type="text" />
          </div>
          <div>
          <input className="inputSeprate" type="text" />
          </div>
          <div>
          <input className="inputSeprate" type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
