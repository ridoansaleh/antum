import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/common.css';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
