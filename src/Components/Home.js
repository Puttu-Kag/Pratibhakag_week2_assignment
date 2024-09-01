import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to your travel journal App</h2>
      <p>Track and manage your travel experience!</p>
      <Link to="/add" className="btn btn-primary">Add New Entry</Link>
      <Link to="/entries" className="btn btn-secondary">View Entries</Link>
    </div>
  );
}
export default Home