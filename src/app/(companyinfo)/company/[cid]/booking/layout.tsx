import BookingMenu from "@/components/BookingMenu"

export default function BookingLayout({
    children,
    // dashboard,
    // manage,
} : {
    children:React.ReactNode,
    // dashboard:React.ReactNode,
    // manage:React.ReactNode
}) {
    return (
        <div className="flex flex-col w-full">
            {children}
            {/* {dashboard} */}
            {/* {manage} */}
            {/* <BookingMenu/> */}
        </div>
    )
}