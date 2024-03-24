export default async function createCompany({
  user,
  company,
  date,
}: {
  user: string;
  company: string;
  date: string;
}) {
  const response = await fetch(
    'https://job-fair-frontend-but-backend.vercel.app/company',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        company: company,
        date: date,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Create company failed');
  }

  return response.json();
}
