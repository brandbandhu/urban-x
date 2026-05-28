import companies from "../../../data.json";

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

  return (
    <div>
      Company slug: {company_slug}; Service slug: {service_slug}
    </div>
  );
}
