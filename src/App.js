import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Resumepage from "./pages/Resumepage";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <MainContentStyled>
            <Switch>
              <Redirect exact from="/" to="/home"/>

              <Route path="/home" exact>
                <div className="lines">
                  <div className="line -1"></div>
                  <div className="line -2"></div>
                  <div className="line -3"></div>
                  <div className="line -4"></div>
                </div>
                <Homepage/>
              </Route>
              <Route path="/about" exact>
                <Aboutpage/>
              </Route>
              <Route path="/resume" exact>
                <Resumepage/>
              </Route>
              <Route path="/portfolios" exact>
              </Route>
              <Route path="/contact" exact>
                <Contactpage/>
              </Route>
            </Switch>
        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main `
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;

    .lines {
      position: absolute;
      min-height: 100vh;
      width: 100%;

      display: flex;
      justify-content: space-evenly;

      .line {
        width: 1px;
        min-height: 100vh;
        background-color: var(--border-color);
      }
    }
`;

export default App;
