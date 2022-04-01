import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FlagImage } from './FlagImage';
// import countryData from '../countries.json';

export function CountryDetails() {
  const [country, setCountry] = useState();
  const params = useParams();

  useEffect(() => {
    async function fetchSingleCountryDetails() {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`
      );
      const data = await response.json();
      console.log(data);
      setCountry(data);
    }

    fetchSingleCountryDetails();
  }, [params]);
  //   const country = countryData.find(
  //     (country) => country.alpha3Code === params.alpha3Code
  //   );
  return (
    <div className="card card-details">
      {country ? (
        <>
          <FlagImage alpha2Code={country.alpha2Code} width={100} />
          <h1>{country.name.common}</h1>
          <div className="capital">
            <h2>Capital:</h2>
            {country.capital[0]}
          </div>
          <div className="area">
            <h2>Area:</h2>
            {country.area}
          </div>
          <div className="borders">
            <h2>Borders:</h2>
            {country.borders.map((border) => {
              return (
                <div>
                  <Link to={'/' + border}>{border}</Link>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
