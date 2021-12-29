import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div>
        <h2 className="title"> Our Tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tours} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
