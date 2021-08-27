import React, { useState } from 'react'
import moment from 'moment'
import DropdownOrder from './component/DropdownOrder'
import ColumnThirdSet from './component/ColumnThirdSet'

export const sortBookmarkGroup = (data, orderStatus) => data
  ? data.sort((preValue, curValue) => {
    const preDate = orderStatus === 'newest' ? curValue.articleDate : preValue.articleDate
    const curDate = orderStatus === 'newest' ? preValue.articleDate : curValue.articleDate
    return moment(preDate).diff(moment(curDate))
  })
  : []

const BookMark = () => {
  const [orderStatus, setOrderStatus] = useState('newest')
  const bookmarkGroup = localStorage.getItem('bookmark') ? sortBookmarkGroup(JSON.parse(localStorage.getItem('bookmark')), orderStatus) : []

  return <div className="main-container">
    <div className="topic-header">
      <p><h1>All bookmark</h1></p>
      <div className="topic-book-mart">
        <div></div>
        <DropdownOrder orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
      </div>
    </div>

    <ColumnThirdSet list={bookmarkGroup} isContent={null} />
  </div>
}

export default BookMark
