interface City {
  name: string;
  country: string;
}

async function Server() {
  const res = await fetch("http://localhost:3000/api/cities");
  const cities = (await res.json()) as City[];

  return (
    <section>
      <h2>From Server</h2>
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

export default Server;
