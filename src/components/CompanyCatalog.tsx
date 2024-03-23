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
            <div style={{margin: "20px", display: "flex", flexDirection: "row", 
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    allCompanyJsonReady.data.map((companyItem:CompanyItem)=>(
                        <Link href={`/company/${companyItem.id}`} className="w-1/5">
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}