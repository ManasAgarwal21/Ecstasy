import React from 'react';
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
