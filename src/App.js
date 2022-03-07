import { BrowserRouter, Link } from 'react-router-dom'

import React from 'react'
import { Router } from './5/router/Router';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page1'>Page1</Link></li>
          <li><Link to='/page2'>Page2</Link></li>
        </ul>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
