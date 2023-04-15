import React from 'react'

const Accordian = ({items}) => {

  return (
    <React.Fragment>
    
    {items.map((obj)=>{
        return(
            <div>
            
            <p>{obj.label}</p>
            <p>{obj.content}</p>
            </div>
        )
    })}
    </React.Fragment>
  )
}

export default Accordian