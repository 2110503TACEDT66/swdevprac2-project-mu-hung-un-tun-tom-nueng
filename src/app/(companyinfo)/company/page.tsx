import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import LinearProgress from '@mui/material/LinearProgress';
import CardPanel from "@/components/CardPanel";
import getAllCompany from "@/libs/getAllCompany";
import { getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from "next/navigation";

export default function Company() {

    const allCompany = getAllCompany();

    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) {
    //     alert("Please Login")
    //     redirect('/auth/login')
    // } 

    // const profile = await getUserProfile(session.user.token)

    return (
        <main className="text-left p-16">
            <div className="">
                
                <Suspense fallback={ <p>Loading ... <LinearProgress/></p> }>
                    <CompanyCatalog allCompanyJson={allCompany}/>
                </Suspense>

                {/* <hr className="my-10"/>
                <h1 className="text-xl font-medium">
                    TRY Client-side Card Panel
                </h1>
                <CardPanel/> */}
            </div>
        </main>
    )
}