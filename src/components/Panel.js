import React from 'react'
import classNames from 'classNames';
const Panel = ({children, classNames, ...rest}) => {
    const finalClassNames = classNames('border rounded p-3 bg-white w-full')
  return (
    <div {...rest} className={finalClassNames}>Panel</div>
  )
}

export default Panel