// import countryData from '../countries.json';
import { Link } from 'react-router-dom';
import { FlagImage } from './FlagImage';

export function CountriesList({ countryData }) {
  console.log(countryData);
  return (
    <div className="card-container">
      {countryData.map(({ name: { common }, alpha3Code, alpha2Code }) => {
        return (
          <div className="card" key={common}>
            <FlagImage alpha2Code={alpha2Code} />
            <Link to={alpha3Code}>{common}</Link>
          </div>
        );
      })}
    </div>
  );
}
