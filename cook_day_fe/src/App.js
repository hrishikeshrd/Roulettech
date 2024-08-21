import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Header from './components/Header'; 
import BlogPage from './components/BlogPage';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/blog" element={<BlogPage />}  />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
