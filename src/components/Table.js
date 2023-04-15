import React from 'react'

const Table = ({data, config}) => {
    const renderHeaders = config.map((column)=>{
        return (
            <th>{column.label}</th>
        )
    })
    const renderedRows = data.map((fruit)=>{
        const renderCells = config.map((column)=>{
            return(<th>{column.label}</th>)
        })
        return (
            <tr>
                 {/* <td>{fruit.name}</td> */}
                 <td>{config[0].render(fruit)}</td>
                {/* <td>{fruit.color}</td> */}
                <td>{config[1].render(fruit)}</td>
                {/* <td>{fruit.score}</td> */}
                <td>{config[2].render(fruit)}</td>
            </tr>
        )
    })
  return (
    <React.Fragment>
    <table className='align-items-center card table w-25'>
    <thead>
    <tr>{renderHeaders}</tr>
    </thead>
        <tbody>
        {renderedRows}
        </tbody>
    </table>
    <div>Devikanth table{data.length}</div>
    </React.Fragment>
  )
}

export default Table