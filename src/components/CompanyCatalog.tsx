import { getServerSession } from 'next-auth';
import Card from './Card';
import { Link, TextField } from '@mui/material';
import getUserProfile from '@/libs/getUserProfile';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
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

  const findCompany = async (e: any) => {
    e.preventDefault();

    const response = await fetch(
      'https://job-fair-frontend-but-backend.vercel.app/company',
      {
        method: 'GET',
      }
    );
  };

  return (
    <>
      <div className="flex w-[100%] flex-row justify-between">
        <h1 className="order-first text-[35px] font-bold">Company List</h1>
        {/* <form onSubmit={findCompany}> */}
        <TextField
          className="order-last mt-[20px] w-[25%]"
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
        {/* </form> */}

        {/* {profile.data.role == 'admin' ? (
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
        ) : null} */}
      </div>
      <div
        className="m-10   flex flex-row flex-wrap content-around justify-around"
        // style={{
        //   margin: '30px',
        //   display: 'flex',
        //   flexDirection: 'row',
        //   flexWrap: 'wrap',
        //   justifyContent: 'space-around',
        //   alignContent: 'space-around',
        // }}
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
