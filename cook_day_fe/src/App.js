import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Header from './components/Header'; // Import the Header component
import BlogPage from './components/BlogPage';


function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/blog" element={<BlogPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
