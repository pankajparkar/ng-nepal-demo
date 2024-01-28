import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    votes: 3
  };

  onVoteChanges = (data) => {
    this.setState({votes: data.detail})
  }

  changeVote(votes){
    this.setState({ votes });
  }

  componentDidMount(){
    this.voteCmp = this.refs.voteCmp;
    this.voteCmp.addEventListener('voteChanges', this.onVoteChanges);
  }

  render() {
    return (
      <div className="App">
        <div>
          Total votes count {this.state.votes}
        </div>
        <hr/>
        <p>
          <vote-cmp ref="voteCmp" votes={this.state.votes}></vote-cmp>
        </p>
        <hr/>
        <p className="App-intro">
          <button onClick={() => this.changeVote(10)}>Set 10 votes</button>
          <button onClick={() => this.changeVote(0)}>Reset Votes</button>
        </p>
      </div>
    );
  }
}

export default App;
