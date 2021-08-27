import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Markup } from 'interweave'
import moment from 'moment'
import ButtonBookMark from './component/ButtonBookMark'
import { PageNotFound } from './Processing'
import SnackBar from './component/SnackBar'
import '../style/TopicDetail.css'

const TopicDetail = () => {
  const { id } = useParams()
  const dataField = localStorage.getItem('contend') ? JSON.parse(localStorage.getItem('contend')) : {}
  const bookmarkGroup = localStorage.getItem('bookmark') ? JSON.parse(localStorage.getItem('bookmark')) : []
  const [isBookMark, setIsBookMark] = useState(bookmarkGroup.some(item => item.header === dataField.header))
  const [isTicker, setTicker] = useState(false)

  const setBookMark = () => {
    if (isBookMark) return bookmarkGroup.filter((value) => value.header !== dataField.header)
    if (bookmarkGroup) return [...bookmarkGroup, dataField]
    return [dataField]
  }

  if (!id || id !== dataField.index.toString()) return <PageNotFound />

  return <div className="main-container">
    <SnackBar isBookMark={isBookMark} isTicker={isTicker} setTicker={setTicker} />
    <div className="topic-layout">
      <div>
        <ButtonBookMark
          text={isBookMark ? 'remove' : 'add'}
          onClick={() => {
            setIsBookMark(!isBookMark)
            setTicker(true)
            localStorage.setItem('bookmark', JSON.stringify(setBookMark()))
          }}
        />
        <p>{moment(dataField.articleDate).format('dd DD MMM YYYY hh.mm').toUpperCase()} BST</p>
        <p><h1>{dataField.header}</h1></p>
        <p><h2><Markup content={dataField.contend} /></h2></p>
        <Markup content={dataField.detail} />
      </div>
      <div className="right-topic">
        <Markup content={dataField.media} />
      </div>
    </div>
  </div>
}

export default TopicDetail
