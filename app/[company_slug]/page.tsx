import companies from "../../data.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type CompanyPageProps = {
  params: Promise<{
    company_slug: string;
  }>;
};

export function generateStaticParams() {
  return companies.map((company) => ({
    company_slug: company.slug,
  }));
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { company_slug } = await params;
  const company = companies.find((item) => item.slug === company_slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border border-gray-200">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            {company.companyName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {company.missionStatement}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {company.services.map((service) => (
              <article
                key={service.slug}
                className="bg-white border border-gray-200 rounded-md p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-gray-600">{service.description}</p>
                <Link
                  href={`/${company.slug}/${service.slug}`}
                  className="mt-6 block w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-center"
                >
                  View Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div
            id="form-placeholder"
            className="p-8 border-2 border-dashed border-gray-300 text-center"
          >
            Form goes here
          </div>
        </div>
      </section>
    </main>
  );
}
