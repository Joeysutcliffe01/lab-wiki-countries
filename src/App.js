import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import CountryDetails from './components/CountriesList';
import CountriesList from './components/CountriesList';
import Home from './components/Home';
// import allCountries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CountriesList allCountries={allCountries} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CountriesList" element={<CountriesList />} />
        {/* <Route path="/:alpha" element={<CountryDetails />}></Route> */}
      </Routes>
    </div>
  );
}
export default App;
