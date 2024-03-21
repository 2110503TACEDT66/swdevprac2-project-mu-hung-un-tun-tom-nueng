'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { Select, MenuItem } from "@mui/material"
import { useState } from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve() {

    const [reserveDate, setReserveDate] = useState(null);
    const [location, setLocation] = useState('Chula');

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            
            <Select variant="standard" value={location} name="company" id="company" 
            className="py-6 h-[2em] w-[200px]" 
            onChange={ (e)=>setLocation(e.target.value)}>
                <MenuItem value="001">Company 1</MenuItem>
                <MenuItem value="002">Company 2</MenuItem>
                <MenuItem value="003">Company 3</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={reserveDate} onChange={ (value)=>setReserveDate(value) }/>
            </LocalizationProvider>

        </div>
    )
}