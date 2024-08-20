import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ title, image, instructions }) => {
  const handleFlip = (e) => {
    e.currentTarget.classList.toggle('flipped');
  };

  return (
    <div className="recipe-card" onClick={handleFlip}>
      <div className="recipe-card-inner">
        <div className="recipe-card-front">
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
        <div className="recipe-card-back">
          <h3>{title}</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
