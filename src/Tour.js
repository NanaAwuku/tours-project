import React from "react";
import { useState } from "react";

const Tour = ({ id, name, price, info, image, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.subString(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
