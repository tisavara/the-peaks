import React from 'react'
import BoxContent from './BoxContent'
import '../../style/BoxContent.css'

const ColumnFourthSet = ({ list }) => {
  return <div className="card-fourth">
    {list.map((value) => <BoxContent listDetail={value} isContent={null} />)}
  </div>
}

export default ColumnFourthSet
