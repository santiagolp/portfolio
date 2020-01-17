import React from 'react';
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'

import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <MainFooter></MainFooter>
    </div>

  );
}

export default App;
