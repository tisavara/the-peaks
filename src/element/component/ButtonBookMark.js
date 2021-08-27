import React from 'react'
import '../../style/GroubBookMark.css'

export const checkIconBookMark = (text) =>
  require(text === 'add' ? '../../image/bookmarkoff-icon@2x.svg' : '../../image/bookmarkon-icon@2x.svg')

const ButtonBookMark = ({ text, onClick }) => {
  const content = `${text} BOOKMARK`
  return <button className="button-book-mark" onClick={onClick}>
    <img className="img-book-mark-icon"
         src={checkIconBookMark(text)}
         alt="Book mask icon" width="10px"
    />
    <span>{content.toUpperCase()}</span>
  </button>
}

export default ButtonBookMark
