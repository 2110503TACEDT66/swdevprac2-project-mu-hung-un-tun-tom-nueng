import DateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import getCompany from "@/libs/getCompany"
import Image from "next/image"

export default async function Booking( {params} : {params: {cid:string}} ) {

    // const companyDetail = await getCompany(params.cid)

    const companyDetail = {
        data: {
            name: "ABC",
            desc: "bla bla bla",
            picture: "/img/about1.png",
            website: "https://abc.com",
            address: "123",
            tel: "0812345678"
        }
    }

    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="my-28 mx-20 p-14 border rounded-3xl shadow-inner">
            <h1 className="text-[30px] font-bold">{companyDetail.data.name}</h1>
            <div className="flex flex-row my-12">
                <Image src={companyDetail.data.picture} 
                    alt="Company Image" 
                    width={0} height={0} sizes="100vw" 
                    className="rounded-lg w-[30%]"
                />
                <div className="mx-32 text-left">
                    <div className="font-medium text-[18px] mb-2">
                        Company Description
                    </div>
                    <div className="text-md mx-8 mb-3">
                        {companyDetail.data.desc} 
                    </div>
                    <div className="font-medium text-[18px] mb-2">
                        Website
                    </div>
                    <div className="text-md mx-8 mb-3">
                        {companyDetail.data.website}
                    </div>
                    <div className="font-medium text-[18px] mb-2">
                        Address
                    </div>
                    <div className="text-md mx-8 mb-3">
                        {companyDetail.data.address} 
                    </div>
                    <div className="font-medium text-[18px] mb-2">
                        Telephone
                    </div>
                    <div className="text-md mx-8 mb-12">
                        {companyDetail.data.tel} 
                    </div>
                    <button className="inline w-[300%] h-[3em] rounded-3xl bg-indigo-600 hover:bg-indigo-800 px-3 py-2 text-white shadow-sm" name="createSession" id="createSession" value="Create Session">
                        Create Session
                    </button>
                    <div className="w-fit space-y-2 text-md text-left text-gray-600">
                        Available Date
                        <DateReserve/>
                    </div>

                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name="bookvaccine" id="bookvaccine" value="Book Vaccine">
                        Confirrm
                    </button>
                </div>
            </div>
        </main>
    )
}