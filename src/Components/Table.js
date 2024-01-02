import React from 'react'
import '../Styles/components.css'

const Table = ({ title, data, ratio, equal }) => {
  let { x, y } = data

  let ratios = equal ? { gridAutoColumns: `${100 / x.length}%` } : { gridTemplateColumns: ratio }
  return (
    <div className='table'>
      <h3>{title}</h3>
      <div className='heads' style={ratios}>
        {x.map((val, i) => <span key={i}><p>{val}</p></span>)}
      </div>
      {y.map((data, i) => <div key={i} style={ratios}>
        {data.map((val, x) => <span key={x}><p>{val}</p></span>)}
      </div>)}
    </div>
  )
}

export default Table