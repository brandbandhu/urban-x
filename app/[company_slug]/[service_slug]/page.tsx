import { notFound } from "next/navigation";
import DynamicForm, { type FormField } from "../../../components/DynamicForm";
import companies from "../../../data.json";

type Service = {
  slug: string;
  title: string;
  description: string;
};

type Company = {
  slug: string;
  companyName: string;
  services: Service[];
  formFields: FormField[];
};

type ServicePageProps = {
  params: Promise<{
    company_slug: string;
    service_slug: string;
  }>;
};

export function generateStaticParams() {
  return companies.flatMap((company) =>
    company.services.map((service) => ({
      company_slug: company.slug,
      service_slug: service.slug,
    })),
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { company_slug, service_slug } = await params;
  const company = (companies as Company[]).find((entry) => entry.slug === company_slug);
  const service = company?.services.find((entry) => entry.slug === service_slug);

  if (!company || !service) {
    notFound();
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6">
        <div className="rounded-md border border-gray-200 bg-gray-50 p-8">
          <div className="h-56 rounded-md border border-gray-200 bg-gray-50" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-md border border-gray-200 bg-white p-6 lg:col-span-2">
            <p className="text-gray-600">{company.companyName}</p>
            <h1 className="mt-2 text-3xl text-gray-900">{service.title}</h1>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-md border border-gray-200 bg-white p-4 lg:sticky lg:top-6">
              <h2 className="text-lg text-gray-900">Request Details</h2>
              <p className="mt-2 text-gray-600">Fill out the form and our team will contact you.</p>
              <DynamicForm formFields={company.formFields} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
