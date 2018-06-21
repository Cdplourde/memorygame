import React, {Component} from 'react';
import './CharacterCard.css'

class CharacterCard extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      clicked: false
    }

    this.updateState = this.updateState.bind(this);
}


  handleClick = () => {
    if(this.state.clicked === false) {
      this.setState({clicked: true});
      this.props.handleScoreChange();
      this.props.handleClick()
    } 
    else {
      this.props.handleTopScoreChange();
      this.updateState();
    }
  }

  updateState() {
    this.setState({clicked: true})
  }

  render() {
    return (
      <li className="character" onClick={this.handleClick}><img src={this.props.imageSrc}></img></li>
    )
  }

}

export default CharacterCard;