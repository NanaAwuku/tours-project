import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = " https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fectchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      setTours(" there is a situation");
    }
  };
  useEffect(() => {
    fectchTours();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h4>Tours are empty</h4>
        </div>
      </main>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTours={removeTours} />
    </div>
  );
};

export default App;
