import { getServerSession } from 'next-auth';
import Card from './Card';
import { Link, TextField } from '@mui/material';
import getUserProfile from '@/libs/getUserProfile';
import { authOptions } from '@/app/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function CompanyCatalog({
  allCompanyJson,
}: {
  allCompanyJson: Promise<CompanyJson>;
}) {
  const allCompanyJsonReady = await allCompanyJson;

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    alert('Please Login');
    redirect('/auth/login');
  }

  const profile = await getUserProfile(session.user.token);
  // var createdAt = new Date(profile.data.createdAt);

  return (
    <>
      {/* Explore {allCompanyJsonReady?.count} allCompany in our catalog */}
      <div className="flex w-[100%] flex-row justify-between">
        <h1 className="order-1 text-[40px] font-bold">Company List</h1>

        <TextField
          className="order-2 mt-[15px] w-[25%]"
          label="Company Name"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
          size="small"
          InputProps={{
            style: {
              borderRadius: '10px',
            },
          }}
        />

        {profile.data.role == 'admin' ? (
          <Link href="/company/create">
            <button
              className="inline h-[3em] w-[40vw] rounded-3xl bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-800"
              name="createCompany"
              id="createCompany"
              value="Create Company"
            >
              Create Company
            </button>
          </Link>
        ) : null}
      </div>
      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignContent: 'space-around',
        }}
      >
        {allCompanyJsonReady.data.map((companyItem: CompanyItem) => (
          <Link
            key={companyItem.id}
            href={`/company/${companyItem.id}`}
            className="w-1/5"
          >
            <Card companyName={companyItem.name} imgSrc={companyItem.picture} />
          </Link>
        ))}
      </div>
    </>
  );
}
