import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Interior from '../Interior/Interior';
import Accessories from '../Accessories/Accessories';

function App() {

  const [ isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false);

  function handleNavigationMenuToggle() {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main isNavigationMenuOpen={isNavigationMenuOpen} toggleNavigationMenu={handleNavigationMenuToggle}/>
        } />

        <Route path="/interior" element={
          <Interior isNavigationMenuOpen={isNavigationMenuOpen} toggleNavigationMenu={handleNavigationMenuToggle}/>
        } />

        <Route path="/accessories" element={
          <Accessories isNavigationMenuOpen={isNavigationMenuOpen} toggleNavigationMenu={handleNavigationMenuToggle}/>
        } />

      </Routes>

    </div>
  );
}

export default App;
