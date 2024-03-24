import CompanyCatalog from '@/components/CompanyCatalog';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardPanel from '@/components/CardPanel';
import getAllCompany from '@/libs/getAllCompany';

export default function Company() {
  const allCompany = getAllCompany();

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
