export default async function createCompany({
  user,
  company,
  date,
  token,
}: {
  user: string;
  company: string;
  date: string;
  token: string;
}) {
  const response = await fetch(
    'https://job-fair-frontend-but-backend.vercel.app/company',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        company: company,
        date: date,
      }),
    }
  );
  console.log(response);

  if (!response.ok) {
    throw new Error('Create company failed');
  }

  return response.json();
}
