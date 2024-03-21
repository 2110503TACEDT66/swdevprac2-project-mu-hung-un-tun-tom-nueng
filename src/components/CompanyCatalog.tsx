import Card from "./Card"
import { Link, TextField } from "@mui/material"

export default async function CompanyCatalog({allCompanyJson}:{allCompanyJson: Promise<CompanyJson>}) {
    const allCompanyJsonReady = await allCompanyJson;
    return (
        <>
            {/* Explore {allCompanyJsonReady?.count} allCompany in our catalog */}
            <div className="w-[100%] flex flex-row justify-between">
                <h1 className="order-first text-[40px] font-bold">Company List</h1>

                <TextField className="order-last mt-[15px] w-[25%]" label="Company Name" name="companyName" id="companyName" placeholder="Company Name" size="small" 
                InputProps={{
                    style: {
                      borderRadius: "10px",
                    }
                  }}/>
            </div>
            {/* <div style={{margin: "20px", display: "flex", flexDirection: "row", 
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    allCompanyJsonReady.data.map((companyItem:CompanyItem)=>(
                        <Link href={`/company/${companyItem.id}`} className="w-1/5">
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture}/>
                        </Link>
                    ))
                }
            </div> */}
            <div className="flex justify-center mt-12 items-center gap-4">
                <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Previous
                </button>
                <div className="flex items-center gap-2">
                    <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        1
                    </span>
                    </button>
                    <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        2
                    </span>
                    </button>
                    <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        3
                    </span>
                    </button>
                    <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        4
                    </span>
                    </button>
                    <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        5
                    </span>
                    </button>
                </div>
                <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div> 
        </>
    )
}