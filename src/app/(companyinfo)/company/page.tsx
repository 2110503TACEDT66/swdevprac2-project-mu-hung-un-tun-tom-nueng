import CompanyCatalog from '@/components/CompanyCatalog';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import getAllCompany from '@/libs/getAllCompany';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Company() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) {
    return <p> Please Login to see the Company</p>;
  }

  const allCompany = await getAllCompany(session.user.token);

  return (
    <main className="p-16 text-left">
      <div className="">
        <Suspense
          fallback={
            <p>
              Loading ... <LinearProgress />
            </p>
          }
        >
          <CompanyCatalog allCompanyJson={allCompany} />
        </Suspense>

        {/* <hr className="my-10"/>
                <h1 className="text-xl font-medium">
                    TRY Client-side Card Panel
                </h1>
                <CardPanel/> */}
      </div>
    </main>
  );
}
