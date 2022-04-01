import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// allCountries

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountry() {
      const url = 'https://ih-countries-api.herokuapp.com/countries';
      const res = await fetch(url);
      const data = await res.json();
      console.log('----------data', data);
      // console.log('----------', data[1].name.common);
      // console.log('----------data.name', data.name);
      // console.log('----------data.name.common', data.common);

      setCountries(data.name);
    }

    fetchCountry();
  }, []);
  return (
    <div>
      <h1>CountriesList</h1>
      {countries.map(({ name }) => {
        return (
          <div>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
  // return (
  //   <div>
  //     <h1>CountriesList</h1>
  //     {allCountries.map(({ elem, i }) => {
  //       return (
  //         <div>
  //           <h1>{elem}</h1>
  //           {/* <Link to={elem.alpha3Code}>{elem.name.common}</Link> */}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default CountriesList;
