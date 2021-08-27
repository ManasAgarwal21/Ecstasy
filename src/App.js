import React from 'react';
// import Login from './components/login';
// import Signup from './components/signup';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
