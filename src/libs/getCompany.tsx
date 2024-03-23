export default async function getCompany(id: string) {
  const response = await fetch(
    `https://job-fair-frontend-but-backend.vercel.app/company/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch company');
  }
  return await response.json();
}
