import styled from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <MainContentStyled>
          
        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main `
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;
    background-color: red;
`;

export default App;
