import React from 'react'
import Accordian from '../components/Accordian'
import { Link } from 'react-router-dom'

const AccordianPage = () => {
    const items=[
        {
            label:"React is good Technology",
            content:"u can use where u want"
        },
        {
            label:"React is good Technology",
            content:"u can use where u want"
        },
        {
            label:"React is good Technology",
            content:"u can use where u want"
        },
        {
            label:"React is good Technology",
            content:"u can use where u want"
        },
        {
            label:"React is good Technology",
            content:"u can use where u want"
        }
    ]
  return (
    <React.Fragment>
    <Accordian items={items}/>
    <Link to="/dropDown">open dropDown</Link>
    <Link to ="/table">Table updated</Link>
    </React.Fragment>
  )
}

export default AccordianPage