import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
// import React, { Suspense } from "react"; 
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Resumepage from "./pages/Resumepage";
import Portfoliopage from "./pages/Portfoliopage";
import Contactpage from "./pages/Contactpage";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


// const Home = React.lazy(() => import('./pages/Homepage'));
// const About = React.lazy(() => import('./pages/Aboutpage'));
// const Resume = React.lazy(() => import('./pages/Resumepage'));
// const Portfolios = React.lazy(() => import('./pages/Portfoliopage'));
// const Contact = React.lazy(() => import('./pages/Contactpage'));

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [btn, setBtn] = useState(true);
  
  
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading....</div>}> */}
        <BrowserRouter>
          <Sidebar 
            navToggle={navToggle} 
            btn={btn} 
            setBtn={setBtn}
            setNavToggle={setNavToggle}
            />
          <div className="menu">
              <IconButton className="btn" onClick={() => {
                setNavToggle(!navToggle)
                setBtn(!btn)
              } }> 
                {
                  btn ? <MenuIcon /> : <CloseIcon/>
                }
              </IconButton>
          </div>
          <MainContentStyled className={`${navToggle ? 'nav-toggle' : '' }`}>
              <Switch>
                <Redirect exact from="/" to="/home"/>

                <Route path="/home" exact>
                  <Homepage/>
                </Route> 
                <Route path="/about" exact>
                  <Aboutpage/>
                </Route>
                <Route path="/resume" exact>
                  <Resumepage/>
                </Route>
                <Route path="/portfolios" exact>
                  <Portfoliopage/>
                </Route>
                <Route path="/contact" exact>
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

    @media screen and (max-width: 500px) {
      transition: all 0.4s ease;
      margin-left: 0;
      &.nav-toggle {
        transform: translateX(16rem);
        transition: all 0.4s ease;
        opacity: 0.2;
      }
    }
`;

export default App;
