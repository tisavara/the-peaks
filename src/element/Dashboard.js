import React, { useState } from 'react'
import ColumnThirdSet from './component/ColumnThirdSet'
import ColumnFourthSet from './component/ColumnFourthset'
import BoxContent from './component/BoxContent'
import GroupBookMarkButton from './component/GroupBookMarkButton'
import { Loading, PageError } from './Processing'
import { useGetMethod } from '../rest/rest'
import '../style/BoxContent.css'

const Dashboard = () => {
  const [orderStatus, setOrderStatus] = useState('newest')
  const {
    loading: topNewsLoading,
    error: topNewsError,
    data: topNewsData
  } = useGetMethod({
    'page-size': 8,
    section: 'news',
    'order-by': orderStatus
  })

  const {
    loading: sportLoading,
    error: sportError,
    data: sportData
  } = useGetMethod({
    'page-size': 3,
    section: 'sport|culture|lifeandstyle',
    'order-by': orderStatus
  })

  if (topNewsLoading || sportLoading) return <Loading />
  if (topNewsError || sportError) return <PageError />

  const topNews = topNewsData
  const listSports = sportData

  return <div className="main-container">
    <div className="topic-header">
      <p><h1>Top stories</h1></p>
      <GroupBookMarkButton orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
    </div>
    <div className="main-topic">
      <div className="side-topic">
        <BoxContent
          listDetail={topNews.shift()}
        />
      </div>
      <div className="side-topic">
        <ColumnFourthSet list={topNews.slice(0, 4)} />
      </div>
    </div>

    <div>
      <ColumnThirdSet list={topNews.slice(4, 7)} />
    </div>
  <p><h2>Sports</h2></p>
    <ColumnThirdSet list={listSports} isContent={null}/>
 </div>
}

export default Dashboard
