import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterProfile from './components/CharacterProfile';
import './App.css';

function App() {
  const [traits, setTraits] = useState({
    name: '',
    age: '',
    gender: 'Male'
  });

  const [character, setCharacter] = useState(null);

  const hairColors = [
    'Pink', 'Blue', 'Silver', 'Jet Black', 'Rainbow', 
    'Crimson', 'Lavender', 'Ash Gray', 'Golden Blonde', 'Neon Green', 
    'Deep Violet', 'Aqua', 'Midnight Blue', 'Chestnut Brown', 'Snow White'
  ];
  
  const eyeColors = [
    'Red', 'Gold', 'Emerald', 'Heterochromia', 'Star-shaped', 
    'Sapphire Blue', 'Amber', 'Amethyst', 'Icy Silver', 'Dark Void', 
    'Glowing White', 'Turquoise', 'Flame Orange', 'Celestial Purple', 'Deep Brown'
  ];
  
  const personalities = [
    'Tsundere', 'Kuudere', 'Genki', 'Yandere', 'Mysterious', 
    'Dandere', 'Himedere/Oujidere', 'Chuunibyou', 'Optimistic Dreamer', 'Stoic Warrior', 
    'Hot-Headed Rebel', 'Playful Trickster', 'Cunning Strategist', 'Noble Guardian', 'Gentle Healer', 
    'Carefree Slacker', 'Loyal Knight', 'Overconfident Showoff', 'Detached Loner', 'Soft-Spoken Intellectual', 
    'Dark and Brooding', 'Innocent and Pure', 'Hyperactive Goofball', 'Mischievous Schemer', 'Vengeful Avenger', 
    'Cold-Blooded Assassin', 'Secret Softie', 'Tactical Genius', 'Kind-Hearted Leader', 'Laid-Back Pacifist', 
    'Witty Sarcastic', 'Flamboyant Performer', 'Righteous Hero', 'Sinister Mastermind', 'Shy Bookworm', 
    'Wild Card', 'Reckless Daredevil', 'Hopeless Romantic', 'Tragic Anti-Hero', 'Unstoppable Workaholic', 
    'Fearless Explorer', 'Cursed Outcast', 'Melancholic Poet', 'Determined Underdog', 'Prideful Aristocrat', 
    'Feral Beast', 'Jaded Veteran', 'Unpredictable Mad Scientist', 'Eccentric Inventor', 'Solemn Monk', 
    'Humble Farmer', 'Energetic Performer', 'Gambler with a Death Wish', 'Mysterious Wanderer', 'Emotionless Machine', 
    'Loyal Sidekick', 'Tyrannical Overlord', 'Hardworking Underdog', 'Nihilistic Philosopher', 'Cheerful Optimist', 
    'Master of Disguise', 'Silver-Tongued Manipulator', 'Lazy Genius', 'Cursed with Immortality', 'Obsessive Stalker', 
    'Wise Mentor', 'Street-Smart Hustler', 'Puppeteer of Fate', 'Regal Diplomat', 'Doomed Seer', 
    'Energetic Sports Star', 'Silent Guardian', 'Split Personality', 'Carefree Foodie', 'Gentle Beast', 
    'Trickster God', 'Battle-Hardened Mercenary', 'Genius Hacker', 'Haunted Survivor', 'Charming Con Artist'
  ];
  
  
  const abilities = [
    'Pyrokinesis', 'Time Manipulation', 'Teleportation', 'Super Strength', 'Elemental Control', 
    'Shadow Manipulation', 'Gravity Control', 'Mind Reading', 'Illusion Casting', 'Healing Touch', 
    'Beast Transformation', 'Energy Absorption', 'Hyper Speed', 'Reality Warping', 'Summoning Spirits', 
    'Lightning Manipulation', 'Soundwave Destruction', 'Blood Magic', 'Wind Blades', 'Astral Projection', 
    'Soul Reaping', 'Cosmic Awareness', 'Bio-Regeneration', 'Necromancy', 'Molecular Disintegration', 
    'Adaptive Evolution', 'Magnetic Manipulation', 'Echo Vision', 'Poison Immunity', 'Dream Infiltration', 
    'Shapeshifting', 'Weapon Summoning', 'Divine Blessing', 'Ice Forging', 'Plant Manipulation', 
    'Darkness Manifestation', 'Invisibility', 'Clone Creation', 'Psychic Barriers', 'Telekinetic Flight', 
    'Demonic Contract', 'Mechanical Assimilation', 'Chrono Rewind', 'Starfire Beams', 'Bloodline Awakening', 
    'Echo Mimicry', 'Rune Enchantments', 'Sound Manipulation', 'Void Manipulation', 'Quantum Tunneling', 
    'Beast Taming', 'Forcefield Generation', 'Acid Generation', 'Celestial Flames', 'Foresight (Future Vision)', 
    'Space Compression', 'Metal Bending', 'Phoenix Resurrection', 'Toxic Gas Emission', 'Sword Mastery (Supernatural)', 
    'Warrior’s Instinct', 'Lunar Empowerment', 'Dream Weaving', 'Portal Creation', 'Anti-Magic Aura', 
    'Sentient Weapon Control', 'Ethereal Chains', 'Holy Light Projection', 'Meteor Summoning', 'Enhanced Reflexes', 
    'Plasma Generation', 'Pain Suppression', 'Rune Carving', 'Astral Chains', 'Thunder Roar', 
    'Bloodlust Berserker Mode', 'Adaptive Camouflage', 'Frost Breath', 'Doom Gaze', 'Reality Anchoring'
  ];
  
  
  const backstories = [
    'Orphaned prince(ss) from a fallen kingdom', 'Experimental subject from a secret lab', 
    'Transfer student from another dimension', 'Former villain trying to reform', 'Ancient spirit reborn in modern world', 
    'Sole survivor of a destroyed civilization', 'Artificial intelligence gaining human emotions', 
    'Lost deity living among mortals', 'Cursed being seeking redemption', 'Reincarnated hero from a forgotten war', 
    'Escaped gladiator from an underground colosseum', 'Secret heir to a powerful organization', 
    'Former assassin seeking peace', 'Bounty hunter with a tragic past', 'Trapped in an endless time loop'
  ];
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTraits(prev => ({ ...prev, [name]: value }));
  };

  const generateRandom = (array) => array[Math.floor(Math.random() * array.length)];

  const handleGenerate = (e) => {
    e.preventDefault();
    const newCharacter = {
      ...traits,
      hairColor: generateRandom(hairColors),
      eyeColor: generateRandom(eyeColors),
      personality: generateRandom(personalities),
      specialAbility: generateRandom(abilities),
      backstory: generateRandom(backstories)
    };
    setCharacter(newCharacter);
  };

  return (
    <div className="App">
      <h1>Character Info Generator</h1>
      <CharacterForm 
        traits={traits} 
        onInputChange={handleInputChange} 
        onGenerate={handleGenerate} 
      />
      {character && <CharacterProfile character={character} />}
    </div>
  );
}

export default App;