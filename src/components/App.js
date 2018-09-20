import React, { Component } from 'react';
// import './global/css/App.css';

import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

import data from'./global/data/data';


class App extends Component {
  render() {
    // console.log(data);

    return (
      <div className="App">
        <Header items={data}/>
        <Content />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer empresa={'Laboratoria Coding AC.'}/>
      </div>
    );
  }
}

export default App;
