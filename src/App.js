import React, { Component } from 'react';
import './App.css';
// import GameWrapper from './components/GameWrapper/GameWrapper'
import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import CharacterCard from './components/CharacterCard/CharacterCard'
import Characters from './characters.json'

class App extends Component {

  constructor(props) {
    super(props)

    this.shuffleCards = this.shuffleCards.bind(this);

    this.handleScoreChange = this.handleScoreChange.bind(this);

    this.handleTopScoreChange = this.handleTopScoreChange.bind(this);

    this.state = { 
      initialState: Characters.characters,
      cards: Characters.characters,
      score: 0,
      topScore: 0
    }    
  }
  
  shuffleCards() {
    let i = Characters.characters.length, j, temp;
    while(--i > 0) {
      j = Math.floor(Math.random() * (i+1));
      temp = Characters.characters[j];
      Characters.characters[j] = Characters.characters[i];
      Characters.characters[i] = temp;
    }
    this.setState({cards: Characters.characters});
  }

  handleScoreChange() {
    this.setState({score: ++this.state.score});
  }

  handleTopScoreChange() {
    this.setState({topScore: ++this.state.topScore, score: 0, cards: this.state.initialState});
  }

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Showcase />
        <ul className="container">
          {
            this.state.cards.map(character => {
              return <CharacterCard handleClick={this.shuffleCards} key={character.name} imageSrc={character.image} handleScoreChange={this.handleScoreChange} handleTopScoreChange={this.handleTopScoreChange}>{character.name}</CharacterCard>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
