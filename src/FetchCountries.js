import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

export default function FetchCountries() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [sortByPopulation, setSortByPopulation] = useState(false);
  const [region, setRegion] = useState("");

  useEffect(() => {
    axios("https://restcountries.eu/rest/v2/all").then(res => {
      setCountries(res.data);
    });
  }, []);

  const filterByLetter = countries => {
    return countries.name.toLowerCase().includes(input.toLowerCase());
  };

  const filterByRegion = countries => {
    return countries.region.includes(region);
  };

  const onChangeCheckbox = () => {
    setSortByPopulation(!sortByPopulation);
  };

  const handlePopulation = (a, b) => {
    if (sortByPopulation) {
      return b.population - a.population;
    }
  };

  return (
    <div>
      <h1>Countries list</h1>
      <div className="filter">
        <input
          type="text"
          className="input"
          placeholder="Search a country"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Filter by Population</label>
          <input
            style={{ margin: "0 5px" }}
            type="checkbox"
            name="population"
            checked={sortByPopulation}
            onChange={onChangeCheckbox}
          />
          <select
            className="region-select"
            value={region}
            onChange={e => setRegion(e.target.value)}
          >
            <option defaultValue hidden>
              Filter by Region
            </option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Europe</option>
            <option>Oceania</option>
            <option>Polar</option>
          </select>
        </div>
      </div>
      <div className="cards">
        {countries
          .filter(filterByRegion)
          .filter(filterByLetter)
          .sort(handlePopulation)
          .map((country, index) => (
            <CountryCard key={index} index={index} country={country} />
          ))}
      </div>
    </div>
  );
}
