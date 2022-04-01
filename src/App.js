import { useState, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { Navbar } from './components/Navbar';

function LayoutComponent({ countryData }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <CountriesList countryData={countryData} />
        <Outlet /> {/* {{{body}}} from hbs / express */}
      </div>
    </div>
  );
}

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    async function fetchCountryData() {
      const response = await fetch(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      const data = await response.json();
      console.log(data);
      setCountryData(data);
    }

    fetchCountryData();
  }, []);

  useEffect(() => {
    console.log('this is now the countryData state:', countryData);
  }, [countryData]);

  return (
    <Routes>
      <Route element={<LayoutComponent countryData={countryData} />}>
        <Route path="/" element={null} />
        <Route
          path="/:alpha3Code"
          element={<CountryDetails countryData={countryData} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
