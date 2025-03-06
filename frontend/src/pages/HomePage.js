import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Nuwaraeliya Cabs</h1>
      <p>Find the best cars and drivers for your journey.</p>
      <Link to="/book"><button>Book Now</button></Link>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
};

export default HomePage;
