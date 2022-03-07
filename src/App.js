import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import React from 'react'
import { Home } from './5/Home';
import { Page1 } from './5/Page1';
import { Page2 } from './5/Page2';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page1'>Page1</Link></li>
          <li><Link to='/page2'>Page2</Link></li>
        </ul>

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/page1'>
            <Page1 />
          </Route>

          <Route exact path='/page2'>
            <Page2 />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
