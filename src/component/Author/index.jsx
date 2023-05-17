import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import "./styles.css";

export const Author = ({ id, name, photo, reverseDir }) => (
  <Link className="author__link" to={`/authors/${id}`}>
    <div
      key={id}
      className={cn("author", {
        reverseDir: reverseDir,
      })}>
      <div className="author__img">
        <img src={photo} alt="" />
      </div>
      <div
        className={cn("author__button-wrap", {
          btn__wrap__reverse: !reverseDir,
        })}>
        <div className="author__button">{name.toUpperCase()}</div>
      </div>
    </div>
  </Link>
);
