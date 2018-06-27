import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import WelcomePage from './WelcomePage'
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage'
import UserPage from './UserPage'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndexPage = () => (
  <PageWrapper>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/:user" component={UserPage} />
    </Switch>
  </PageWrapper>
)

export default IndexPage
