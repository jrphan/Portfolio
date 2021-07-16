import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <MainContentStyled>
            <div className="lines">
              <div className="line -1"></div>
              <div className="line -2"></div>
              <div className="line -3"></div>
              <div className="line -4"></div>
            </div>
            <Switch>
              <Redirect exact from="/" to="/home"/>

              <Route path="/home" exact>
                <Homepage/>
              </Route>
              <Route path="/about" exact>
              </Route>
              <Route path="/resume" exact>
              </Route>
              <Route path="/portfolios" exact>
              </Route>
              <Route path="/blogs" exact>
              </Route>
              <Route path="/contact" exact>
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
