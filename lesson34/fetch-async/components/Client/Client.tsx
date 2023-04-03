"use client";

import { cache, use } from "react";

interface City {
  name: string;
  country: string;
}

const fetchCities = cache(async () => {
  const res = await fetch("http://localhost:3000/api/cities");
  const cities = (await res.json()) as City[];
  return cities;
});

function Client() {
  const cities = use(fetchCities());

  return (
    <section>
      <h2>From Client</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.name}>
            {city.name} - {city.country}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Client;
