import React, { useState, useEffect } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    dishname: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    // Fetch popular recipes from the backend using fetch
    fetch('http://127.0.0.1:8000/api/popular-recipes/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPopularRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching popular recipes:', error);
      });
  }, []);

  const handleShareClick = () => {
    setFormVisible(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the recipe data to the backend
    fetch('http://127.0.0.1:8000/api/submit-recipe/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to submit the recipe');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Recipe submitted successfully:', data);
        setFormVisible(false);
        setFormData({ username: '', dishname: '', ingredients: '', instructions: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error submitting recipe:', error);
      });
  };

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <blockquote className="quote">
        "Innovated a new dish? Share your secret recipe with us!"
      </blockquote>
      <p>
        We will choose from the recipes, and your recipe will be displayed in "Our Specialty" in the following week.
      </p>

      {/* Popular Recipes Section */}
      <div className="popular-recipes">
        <h2>Popular Recipes from Last Week</h2>
        <div className="recipe-cards">
          {popularRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card-horizontal">
              <h3>{recipe.recipeTitle}</h3>
              <p>
                <strong>Shared by:</strong> {recipe.username}
              </p>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="share-button" onClick={handleShareClick}>
        Share Your Recipe
      </button>

      {formVisible && (
        <form className="recipe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Your Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dishname">Dish Name</label>
            <input
              type="text"
              id="dishname"
              name="dishname"
              value={formData.dishname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BlogPage;
