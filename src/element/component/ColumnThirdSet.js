import React from 'react'
import BoxContent from './BoxContent'
import '../../style/BoxContent.css'

const ColumnThirdSet = ({ list, isContent }) => {
  return <div className="card-third">
    {list.map((value) => <BoxContent listDetail={value} isContent={isContent} />)}
  </div>
}

export default ColumnThirdSet
