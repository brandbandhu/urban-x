import companies from "../../data.json";

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

  return <div>Company slug: {company_slug}</div>;
}
