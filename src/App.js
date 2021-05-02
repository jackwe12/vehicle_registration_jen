import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from "styled-components";
import 'antd/dist/antd.css';


const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;

`

function App() {
  return (
    <BodyWrapper>
      <Router>
            <Switch>
              <Route path="/" component = {HomePage}/>
            </Switch>
        </Router>
    </BodyWrapper>
  );
}

export default App;
