import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="card">
      <img className="country-img" src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p>
        <b>Population</b>: {country.population.toLocaleString()}
      </p>
      <p>
        <b>Region</b>: {country.region}
      </p>
      <p>
        <b>Capital</b>: {country.capital}
      </p>
    </div>
  );
}
