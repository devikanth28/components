import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordianPage from './pages/AccordianPage';
import DropDown from './components/DropDown';
import TablePage from './components/TablePage';
import AgeCalculator from './AgeCalculator';

const RoutesFile = () => {
   
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/accordian" element={<AccordianPage/>}/>
            <Route path="/dropDown" element={<DropDown/>}/>
            <Route path="/table" element={<TablePage/>}/>
            <Route path="/ageCalculator" element={<AgeCalculator/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesFile