import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import React, { Suspense } from "react";
// import Loading from "./components/Loading";

const Home = React.lazy(() => import('./pages/Homepage'));
const About = React.lazy(() => import('./pages/Aboutpage'));
const Resume = React.lazy(() => import('./pages/Resumepage'));
const Portfolios = React.lazy(() => import('./pages/Portfoliopage'));
const Contact = React.lazy(() => import('./pages/Contactpage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Sidebar/>
          <MainContentStyled>
              <Switch>
                <Redirect exact from="/" to="/home"/>

                <Route path="/home" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/resume" exact component={Resume}/>
                <Route path="/portfolios" exact component={Portfolios}/>
                <Route path="/contact" exact component={Contact}/>
              </Switch>
          </MainContentStyled>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

const MainContentStyled = styled.main `
    margin-left: 16rem;
    min-height: 100vh;
`;

export default App;
