export default async function getCompany(id:string) {
    // Don't forget to change URL
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch company")
    }
    return await response.json()
}