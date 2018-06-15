import React, { Component } from 'react';
import './App.css';
import GameList from './components/GameList/GameList'
import GameListItem from './components/GameListItem/GameListItem'
import GameWrapper from './components/GameWrapper/GameWrapper'
import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Showcase />
        <GameWrapper>
          <GameList>
            
          </GameList>
        </GameWrapper>
      </div>
    );
  }
}

export default App;
