import React from 'react'
import { useHistory } from 'react-router-dom'
import { Markup } from 'interweave'
import '../../style/BoxContent.css'

const BoxContent = ({ listDetail, isContent }) => {
  const history = useHistory()
  const { index, image, header, contend } = listDetail
  return <div
    className="card"
    style={{ backgroundImage: `url(${image || require('../../image/Logo_White.png')})` }}
    onClick={(e) => {
      e.preventDefault()
      history.push(`/topic/${index}`)
      localStorage.setItem('contend', JSON.stringify(listDetail))
    }}
  >
      <div className="container">
        <h4><b>{header}</b></h4>
        <p><Markup content={isContent === null ? '' : contend} /></p>
      </div>
    </div>
}

export default BoxContent
