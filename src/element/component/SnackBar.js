import React, { useEffect, useState } from 'react'
import { checkIconBookMark } from './ButtonBookMark'
import '../../style/SnackBar.css'

const SnackBar = ({ isBookMark, isTicker, setTicker }) => {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    if (isTicker) {
      setShowBar(true)
      setTimeout(() => {
        setShowBar(false)
        setTicker(false)
      }, 2000)
    }
  }, [isBookMark, isTicker])

  return <div className="snack-bar-box">
    <div className="snack-bar" style={{ bottom: showBar ? 0 : '100%', backgroundColor: isBookMark ? '#388E3C' : '#D32F2F' }}>
      <img className="img-book-mark-icon"
           src={checkIconBookMark(isBookMark ? 'remove' : 'add')}
           alt="Book mask icon" width="10px"
      />
      {`${isBookMark ? 'SAVED TO' : 'REMOVED FROM'} BOOKMARKS`}
    </div>
  </div>
}

export default SnackBar
