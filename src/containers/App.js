import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scrollable from '../components/Scrollable';
import ErrorBondry from './ErrorBondry';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      robots: []
    }
  }
  render() {
    const sampleRobots = [
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/H/K9/HK962/HK962?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1467071336284',
        name: 'Nikola',
        email: 'nicksona.in.lan@gmail.com',
        id: 1
      },
      {
        image: 'https://cdn.babymarkt.com/babymarkt/img/549456/443/tomy-lamaze-play-grow-rusty-robot-a059936.jpg',
        name: 'Ivan',
        email: 'ivan.in.lan@gmail.com',
        id: 2
      }
    ];
    return (
      <div className="App">
        <SearchBox/>
        <Scrollable>
         <ErrorBondry>
            <CardList sampleRobots={sampleRobots}/>
          </ErrorBondry>
        </Scrollable>
      </div>
    );
  }
}

export default App;
