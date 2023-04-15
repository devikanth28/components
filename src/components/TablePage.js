import React from 'react'
import Table from './Table'
const TablePage = () => {
    const data = [
        {name:"Orange", color:"bg-orange-500", score:5}, 
        {name:"Apple", color:"bg-red-500", score:10}, 
        {name:"Banana", color:"bg-yellow-500", score:15}, 
        {name:"Orange", color:"bg-orange-500", score:5}, 
        {name:"Lime", color:"bg-green-500", score:25}, 
    ]
    const vehicles = [
        {name:"Truck",Price:"2L",DiscountedPrice:"1L",Image:"T"},
        {name:"Car",Price:"3L",DiscountedPrice:"1.5L",Image:"C"},
        {name:"Auto",Price:"0",DiscountedPrice:".5L",Image:"A"},
        {name:"Bus",Price:"20L",DiscountedPrice:"3L",Image:"B"},
        {name:"Bike",Price:"1L",DiscountedPrice:"10k",Image:"Bike"}
    ]

    const fruitConfig=[
        {label:'name Of fruit',render:(fruit)=>fruit.name},
        {label:'color',render:(fruit)=>fruit.color},
        {label:"score",render:(fruit)=>fruit.score}
    ]
  return (
    <Table data ={data} config={fruitConfig}/>
  )
}

export default TablePage