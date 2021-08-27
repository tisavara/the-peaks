import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './element/Navbar'
import './App.css'
import Dashboard from './element/Dashboard'
import TopicDetail from './element/TopicDetail'
import BookMark from './element/BookMark'
import { PageNotFound } from './element/Processing'
import SearchResults from './element/SearchResults'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/search/:search" component={SearchResults} />
        <Route path="/topic/:id" component={TopicDetail} />
        <Route path="/bookmark" component={BookMark} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App
