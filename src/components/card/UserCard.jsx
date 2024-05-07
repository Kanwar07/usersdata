import React from "react";
import usercardstyle from "./UserCard.module.css";

function UserCard({ avatar, email, first_name, id, last_name }) {
  return (
    <div key={id} className={usercardstyle.card}>
      <div>
        <img src={avatar} alt={first_name} className={usercardstyle.image} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        {first_name} {last_name}
      </div>
      <div>{email}</div>
    </div>
  );
}

export default UserCard;
