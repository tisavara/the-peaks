import React from 'react'

const DropdownOrder = ({ orderStatus, setOrderStatus }) => {
  return <select
    value={orderStatus}
    onChange={(e) => setOrderStatus(e.target.value)}
  >
    <option value="newest">Newest first</option>
    <option value="oldest">Oldest first</option>
  </select>
}

export default DropdownOrder
