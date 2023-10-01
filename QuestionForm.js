import React, { useState } from 'react';
import './QuestionForm.css';
function QuestionForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const handleSubmit = () => {
    // Handle form submission here
  };
  return (
    <div className="question-form">
      <h2>Ask a Question</h2>
      <div className="form-field">
        <label>Title:</label>
        <input type="text" placeholder="Enter title" onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div className="form-field">
        <label>Description:</label>
        <textarea rows="4" placeholder="Enter description" onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div className="form-field">
        <label>Tags:</label>
        <input type="text" placeholder="Enter tags" onChange={(event) => setTags(event.target.value)} />
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Post</button> </div>
  );}

export default QuestionForm;
