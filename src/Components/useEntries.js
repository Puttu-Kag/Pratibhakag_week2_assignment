import { useState, useEffect } from 'react';

const useEntries = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('travelEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  useEffect(() => {
    localStorage.setItem('travelEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const editEntry = (index, updatedEntry) => {
    const updatedEntries = entries.map((entry, i) =>
      i === index ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    editEntry,
  };
};

export default useEntries;
