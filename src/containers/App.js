import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scrollable from '../components/Scrollable';
import ErrorBondry from './ErrorBondry';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox/>
        <Scrollable>
          <ErrorBondry>
            <CardList/>
          </ErrorBondry>
        </Scrollable>
      </div>
    );
  }
}

export default App;
