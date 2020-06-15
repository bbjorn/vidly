import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart, faHeartRegular);

const Like = (props) => {
  if (props.like === true)
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        icon={faHeart}
        aria-hidden="true"
      />
    );
  return (
    <FontAwesomeIcon
      onClick={props.onClick}
      icon={faHeartRegular}
      aria-hidden="true"
    />
  );
};

export default Like;
