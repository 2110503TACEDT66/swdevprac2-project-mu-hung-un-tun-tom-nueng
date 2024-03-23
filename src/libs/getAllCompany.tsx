export default async function getAllCompany() {

    await new Promise((resolve)=>setTimeout(resolve, 1000))
    const response = await fetch("https://job-fair-frontend-but-backend.vercel.app/company")
    if(!response.ok) {
        throw new Error("Failed to fetch all company")
    }
    return await response.json()
}