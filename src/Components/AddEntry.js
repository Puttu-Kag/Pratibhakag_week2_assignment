import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AddEntry.css";

const AddEntry = ({ addEntry }) => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { title, location, date, description };
    addEntry(newEntry);
    navigate('/entries');
  }

  return (
    <div className="main-container">
      <h2>Add New Travel Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required>
          </input>
        </div>

        <div className="form">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required>
          </input>
        </div>

        <div className="form">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required>
          </input>
        </div>

        <div className="form">
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>
          </textarea>
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}
export default AddEntry;