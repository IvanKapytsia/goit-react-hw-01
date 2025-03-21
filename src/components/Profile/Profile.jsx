import React from "react";
import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.block}>
      <div>
        <img className={s.avatar} src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.items}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>{" "}
          <span className={s.value}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>{" "}
          <span className={s.value}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>{" "}
          <span className={s.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
