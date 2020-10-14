import React, { useState, useEffect } from 'react'
import Wrapper from './components/Wrapper'
import Main from './components/Main'
import Login from './components/Login'
import NewsContainer from './blocks/news/NewsContainer'
import HackerNewsContainer from './blocks/hackernews/HackerNewsContainer'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route } from 'react-router-dom'
require('dotenv').config()

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      setLoggedIn(localStorage.getItem('loggedIn') === 'true')
    }
  }, [])

  return (
    <RecoilRoot>
      <Router>
        {loggedIn ? (
          <Wrapper>
            <Route exact path="/news">
              <NewsContainer />
            </Route>
            <Route exact path="/hackernews">
              <HackerNewsContainer />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Wrapper>
        ) : (
          <Route exact path="/">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
        )}
      </Router>
    </RecoilRoot>
  )
}

export default App
