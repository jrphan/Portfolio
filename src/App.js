import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import React, { Suspense } from "react";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Resumepage from "./pages/Resumepage";
import Portfoliopage from "./pages/Portfoliopage";
import Contactpage from "./pages/Contactpage";


// const Home = React.lazy(() => import('./pages/Homepage'));
// const About = React.lazy(() => import('./pages/Aboutpage'));
// const Resume = React.lazy(() => import('./pages/Resumepage'));
// const Portfolios = React.lazy(() => import('./pages/Portfoliopage'));
// const Contact = React.lazy(() => import('./pages/Contactpage'));

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading....</div>}> */}
        <BrowserRouter>
          <Sidebar/>
          <MainContentStyled>
              <Switch>
                <Redirect exact from="/" to="/Portfolio/home"/>

                <Route path="/Portfolio/home" exact>
                  <Homepage/>
                </Route> 
                <Route path="/Portfolio/about" exact>
                  <Aboutpage/>
                </Route>
                <Route path="/Portfolio/resume" exact>
                  <Resumepage/>
                </Route>
                <Route path="/Portfolio/portfolios" exact>
                  <Portfoliopage/>
                </Route>
                <Route path="/Portfolio/contact" exact>
                  <Contactpage/>
                </Route>
              </Switch>
          </MainContentStyled>
        </BrowserRouter>
      {/* </Suspense> */}
    </div>
  );
}

const MainContentStyled = styled.main `
    margin-left: 16rem;
    min-height: 100vh;
`;

export default App;
