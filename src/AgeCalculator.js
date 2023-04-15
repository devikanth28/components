import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const AgeCalculator = () => {
    const currentDate = new Date();
    const [dateOfBirthyYear, setDateOfBirthYear] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (e) =>{
        console.log(`${e.target.value}`, typeof(e.target.value))
        setStartDate(new Date(e.target.value))
        setDateOfBirthYear(e.target.value)
    }
    const year = currentDate.getFullYear() - dateOfBirthyYear;
    console.log(startDate.getFullYear(),typeof(startDate))
    // console.log(startDate ?? "")
  return (
    <React.Fragment>
        Enter Year<input type='Date' onChange={(e)=>{handleChange(e)}} min={`${currentDate.getFullYear() +`-`+currentDate.getMonth() +`-`+currentDate.getDate() }`} max={`${currentDate.getFullYear() +`-`+currentDate.getMonth() +`-`+currentDate.getDate() }`}/>
       {year &&  <p>{year}</p>}
       {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />*/}
    </React.Fragment>
  )
}

export default AgeCalculator