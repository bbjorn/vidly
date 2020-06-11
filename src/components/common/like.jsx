import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart, faHeartRegular);

export class Like extends Component {
  render() {
    if (this.props.like === true)
      return (
        <FontAwesomeIcon
          onClick={this.props.onClick}
          icon={faHeart}
          aria-hidden="true"
        />
      );
    return (
      <FontAwesomeIcon
        onClick={this.props.onClick}
        icon={faHeartRegular}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
