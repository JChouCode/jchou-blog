import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Header from "./components/Header"
import $ from "jquery"

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
      <div className="content">
        <React.Suspense fallback={
          <div className="container">
            <div className="built">Built with <span>React</span> & <span>GraphQL</span></div>
            <div className="card">
              <h3>Loading...</h3>
            </div>
          </div>
        }>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
