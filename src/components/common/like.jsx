import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Like = ({ like, onClick }) => {
  if (like === true)
    return (
      <FontAwesomeIcon onClick={onClick} icon={faHeart} aria-hidden="true" />
    );
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={faHeartRegular}
      aria-hidden="true"
    />
  );
};

export default Like;
