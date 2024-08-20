import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
      </Routes>
    </Router>
  );
}

export default App;
