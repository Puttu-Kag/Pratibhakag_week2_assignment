import React, { useState } from 'react';
import "./styles/ViewEntries.css";

function ViewEntries({ entries, deleteEntry, editEntry }) {
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = (index) => {
    setEditMode(true);
    setCurrentIndex(index);
    const entry = entries[index];
    setTitle(entry.title);
    setLocation(entry.location);
    setDate(entry.date);
    setDescription(entry.description);
  };

  const handleUpdate = () => {
    const updatedEntry = { title, location, date, description };
    editEntry(currentIndex, updatedEntry);
    setEditMode(false);
  };

  return (
    <div className='view-entries-container'>
      <h2 className="heading">Travel Entries</h2>
      {entries.length === 0 ? (
        <p className="no-entries-message">No entries available.</p>
      ) : (
        <ul className="entries-list">
          {entries.map((entry, index) => (
            <li key={index} className="entry-item">
              <div className="entry-details">
                <h5 className="entry-title">{entry.title}</h5>
                <p className="entry-info">{entry.location} - {entry.date}</p>
                <p className="entry-description">{entry.description}</p>
              </div>
              <div className="entry-actions">
                <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                <button onClick={() => deleteEntry(index)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editMode && (
        <div className="edit-entry-card">
          <h3 className="edit-heading">Edit Entry</h3>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleUpdate} className="btn btn-success">Update Entry</button>
        </div>
      )}
    </div>
  );
}

export default ViewEntries;
