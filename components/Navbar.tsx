import Link from "next/link";
import companies from "../data.json";

type Company = {
  slug: string;
  companyName: string;
};

export default function Navbar() {
  const navCompanies = (companies as Company[]).slice(0, 4);

  return (
    <header className="bg-white border border-gray-200 rounded-md">
      <nav className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-gray-900 font-semibold rounded-md border border-gray-200 px-4 py-2"
          >
            UrbanX
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full sm:w-auto">
            {navCompanies.map((company) => (
              <Link
                key={company.slug}
                href={`/${company.slug}`}
                className="text-gray-600 border border-gray-200 rounded-md px-4 py-2 bg-white"
              >
                {company.companyName}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
