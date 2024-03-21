export default async function getAllCompany() {

    await new Promise((resolve)=>setTimeout(resolve, 1000))
    // Don't forget to change URL
    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals")
    if(!response.ok) {
        throw new Error("Failed to fetch all company")
    }
    return await response.json()
}