import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

