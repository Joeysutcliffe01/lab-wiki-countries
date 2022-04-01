import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/CountriesList">Countries List</NavLink>
        <NavLink to="/CountryDetails">Country Details</NavLink>
      </nav>
      <Outlet />
      <h1>LAB - WikiCountries</h1>
    </div>
  );
}

export default Navbar;
