import companies from "../data.json";

export default function HomePage() {
  return (
    <main>
      <h1>UrbanX</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.slug}>{company.companyName}</li>
        ))}
      </ul>
    </main>
  );
}
