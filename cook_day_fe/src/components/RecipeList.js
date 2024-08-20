import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './RecipeList.css'; // Import the CSS

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <>
            <h2 style={{
  textAlign: 'center',
  fontSize: '2em',
  color: '#FF4D00',  
  fontFamily: "'Montserrat', sans-serif", 
  textTransform: 'uppercase',
  marginBottom: '20px',
  letterSpacing: '2px',
  
}}>Our Speciality</h2>
            <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          instructions={recipe.instructions}
        />
      ))}
    </div>

    </>
  );
};

export default RecipeList;
