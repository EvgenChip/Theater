import React from "react";

import { Author } from "../Author";
import { AUTHORS_DATA } from "../../constants/data.js";

import "./styles.css";

export const Authors = () => (
  <div className="authors">
    {AUTHORS_DATA.map(({ id, name, photo }, index) => {
      const reverseDir = index % 2 !== 0;

      return (
        <Author
          key={id}
          id={id}
          name={name}
          photo={photo}
          reverseDir={reverseDir}
        />
      );
    })}
  </div>
);
