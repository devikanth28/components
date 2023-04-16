import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import Panel from './Panel';
const DropDown = () => {
    const [isOpen, setIsOpen]=useState(false);
    const [value, setValue] = useState('select....')
    const dropDownRef = useRef();
   
    const handleClick = () =>{
        setIsOpen(!isOpen)
    } 
    const options= [
        {label:"red", value:'red'},
        {label:'green',value:'green'},
        {label:'blue',value:'blue'}
    ]
   
    const renderOptions = options.map((option)=>{
        return(
            // <div onClick = {()=>handleOptionClick()} key={option.value}>{option.label}</div>
            <Link to="/accordian">{option.label}</Link>
            )
    })
  return (
    <React.Fragment>
    <div ref = {dropDownRef} onClick={handleClick}>{value}</div>
    {console.log("dropDownRef",dropDownRef.current)}
    
   {isOpen && <div>{renderOptions}</div>}
    </React.Fragment>
  )
}

export default DropDown