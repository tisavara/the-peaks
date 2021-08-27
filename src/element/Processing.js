import React from 'react'
import { SpinnerLoading } from './component/SpinnerLoading'

export const Loading = () => {
  return <div className="main-padding">
    <SpinnerLoading />
  </div>
}

export const PageError = () => {
  return <div className="main-padding">
    <p><h1>An unexpected error occurred.</h1></p>
    <p>Please contact support</p>
  </div>
}

export const PageNotFound = () => {
  return <div className="main-padding">
    <p><h1>Not found</h1></p>
  </div>
}
