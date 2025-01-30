import React from 'react';

const CharacterForm = ({ traits, onInputChange, onGenerate }) => {
  return (
    <form onSubmit={onGenerate} className="character-form">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={traits.name} 
          onChange={onInputChange}
          required
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={traits.age}
          onChange={onInputChange}
          min="1"
          required
        />
      </label>

      <label>
        Gender:
        <select name="gender" value={traits.gender} onChange={onInputChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <button type="submit">Generate Character Details</button>
    </form>
  );
};

export default CharacterForm; 