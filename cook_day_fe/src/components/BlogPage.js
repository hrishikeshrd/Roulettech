import React, { useState, useEffect } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [userRecipes, setUserRecipes] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    dishname: '',
    ingredients: '',
    instructions: '',
  });
  const [message, setMessage] = useState('');  // State for response messages

  // Fetch user recipes when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user-recipes/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching user recipes:', error);
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
        setMessage(data.message);  // Set the message from the server response
        setFormVisible(false);
        setFormData({ username: '', dishname: '', ingredients: '', instructions: '' }); // Reset form
        // Fetch the updated list of user recipes
        fetch('http://127.0.0.1:8000/api/user-recipes/')
          .then(response => response.json())
          .then(data => setUserRecipes(data));
      })
      .catch((error) => {
        console.error('Error submitting recipe:', error);
        setMessage('There was an error submitting your recipe.');
      });
  };

  return (
    <div className="blog-page">
      {/* <h2 style={{textAlign: 'center',
  fontSize: '2em',
  color: '#FF4D00',  
  fontFamily: "'Montserrat', sans-serif", 
  textTransform: 'uppercase',
  marginBottom: '20px',
  letterSpacing: '2px',
  
}}>Our Blog</h2> */}
     
      {/* Display the response message */}
      {message && <p className="response-message">{message}</p>}

      {/* User Recipes Section */}
      <div className="user-recipes">
        {/* <h2 className="section-title">Shared Delights</h2> */}
        <ul className="recipe-list">
          {userRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-list-item">
              <div className="recipe-title">{recipe.dishname}</div>
              <div className="recipe-details">
                <div><strong>Ingredients:</strong> {recipe.ingredients}</div>
                <div><strong>Instructions:</strong> {recipe.instructions}</div>
                <div><strong>User:</strong> {recipe.username}</div>
              </div>
            </li>
  ))}
        </ul>
      </div>
      <blockquote className="quote">
        "Innovated a new dish? Share your secret recipe with us!"
      </blockquote>
      <p>
        We will choose from the recipes, and your recipe will be displayed in "Our Specialty" in the following week.
      </p>

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
