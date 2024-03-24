import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import LinearProgress from '@mui/material/LinearProgress';
import getAllCompany from "@/libs/getAllCompany";

export default function Company() {

    const allCompany = getAllCompany();

    return (
        <main className="text-left p-16">
            <div className="">
                <Suspense fallback={ <p>Loading ... <LinearProgress/></p> }>
                    <CompanyCatalog allCompanyJson={allCompany}/>
                </Suspense>
            </div>
        </main>
    )
}