import React from 'react';
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import { Helmet } from "react-helmet";


import './App.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Santiago Dellepiane Portfolio</title>
        <link rel="canonical" href="https://santiagolp.github.io/portfolio/" />
      </Helmet>
      <MainHeader></MainHeader>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <MainFooter></MainFooter>
    </div>

  );
}

export default App;
