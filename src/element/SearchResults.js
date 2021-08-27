import React, { useState } from 'react'
import ColumnThirdSet from './component/ColumnThirdSet'
import GroupBookMarkButton from './component/GroupBookMarkButton'
import { useGetMethod } from '../rest/rest'
import { Loading, PageError } from './Processing'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SpinnerLoading } from './component/SpinnerLoading'

const SearchResults = () => {
  const { search } = useParams()
  const [orderStatus, setOrderStatus] = useState('newest')
  const [pageSize, setPageSize] = useState(15)
  const { loading, error, data } = useGetMethod({
    'page-size': pageSize,
    q: search,
    'order-by': orderStatus
  })

  if (loading && pageSize === 15) return <Loading />
  if (error) return <PageError />

  return <div className="main-container">
    <div className="topic-header">
      <p><h1>Search results</h1></p>
      <GroupBookMarkButton orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
    </div>

    <InfiniteScroll next={() => setPageSize(pageSize + 15)} hasMore={true} loader={<SpinnerLoading />} dataLength={data.length}>
      <ColumnThirdSet list={data} isContent={null} />
    </InfiniteScroll>

  </div>
}

export default SearchResults
