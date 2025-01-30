import React from 'react';

const CharacterProfile = ({ character }) => {
  return (
    <div className="character-profile">
      <h2>{character.name}</h2>
      <div className="character-details">
        <p>Age: {character.age}</p>
        <p>Gender: {character.gender}</p>
        <p>Hair Color: {character.hairColor}</p>
        <p>Eye Color: {character.eyeColor}</p>
        <p>Personality: {character.personality}</p>
        <p>Special Ability: {character.specialAbility}</p>
        <p>Backstory: {character.backstory}</p>
      </div>
    </div>
  );
};

export default CharacterProfile;