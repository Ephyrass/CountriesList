import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="card">
      <img className="country-img" src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}
