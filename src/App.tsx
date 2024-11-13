import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [continents, setContinents] = useState<string[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<string>('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CONTINENTS_API ?? 'https://restcountries.com/v3.1/all';

    axios
      .get(apiUrl)
      .then((response) => {
        const uniqueContinents = new Set<string>();
        response.data.forEach((country: { region: string }) => {
          if (country.region) {
            uniqueContinents.add(country.region);
          }
        });
        setContinents(Array.from(uniqueContinents));
      })
      .catch((error) => {
        console.error('Error fetching continents:', error);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div>
      <h2>Select a Continent</h2>
      <select onChange={handleChange} value={selectedContinent}>
        <option value="">--Select Continent--</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
