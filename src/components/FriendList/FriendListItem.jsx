import React from "react";

import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friend_card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.friend_name}>{name}</p>
      <p className={clsx(s.friend_status, s.friend_status.online)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
