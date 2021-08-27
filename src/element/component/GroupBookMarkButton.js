import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonBookMark from './ButtonBookMark'
import DropdownOrder from './DropdownOrder'
import '../../style/GroubBookMark.css'

const GroupBookMarkButton = ({ orderStatus, setOrderStatus }) => {
  const history = useHistory()
  return <div className="topic-book-mart">
    <button className="button-book-mark">
      <ButtonBookMark text={'view'} onClick={() => history.push('/bookmark')} />
    </button>
    <DropdownOrder orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
  </div>
}

export default GroupBookMarkButton
