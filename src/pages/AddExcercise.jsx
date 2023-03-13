import React, { useState } from 'react';
import './AddExercise.css';

export default function AddExercise() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await fetch('http://localhost:5000/exercise/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('Token'),
        },
        body: JSON.stringify({
          title: title,
          description: description,
          type: type,
          duration: duration,
        }),
      });

      const data = await result.json();
      alert('Added');
      setTitle('');
      setDescription('');
      setType('');
      setDuration('');
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="exercise-form">
      <h2>Add Exercise</h2>
      <div className="form-control">
        <label>Title</label>
        <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div className="form-control">
        <label>Type</label>
        <input type="text" placeholder="Enter type" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Duration (in minutes)</label>
        <input type="number" placeholder="Enter duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <input type="submit" value="Add Exercise" className="btn" />
    </form>
  );
}

