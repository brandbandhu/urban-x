import Link from "next/link";
import companies from "../data.json";

type Company = {
  slug: string;
  companyName: string;
  missionStatement: string;
};

function truncateText(text: string, maxLength = 120) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

export default function HomePage() {
  const companyCards = companies as Company[];

  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="border border-gray-200 rounded-md bg-gray-50 aspect-[4/3] flex items-center justify-center">
            <span className="text-gray-600">Image placeholder</span>
          </div>

          <div className="border border-gray-200 rounded-md bg-white p-6">
            <p className="text-gray-600">Multi-service company network</p>
            <h1 className="text-gray-900 text-4xl sm:text-5xl font-semibold mt-4">
              UrbanX
            </h1>
            <p className="text-gray-600 mt-4">
              Practical service teams for catering, housekeeping, construction,
              and furniture needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {companyCards.map((company) => (
            <article
              key={company.slug}
              className="border border-gray-200 rounded-md bg-white p-6 flex flex-col"
            >
              <h2 className="text-gray-900 text-2xl font-semibold">
                {company.companyName}
              </h2>
              <p className="text-gray-600 mt-4 flex-1">
                {truncateText(company.missionStatement)}
              </p>
              <Link
                href={`/${company.slug}`}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-center mt-6"
              >
                View company
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
