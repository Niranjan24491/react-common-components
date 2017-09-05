import React, { Component } from 'react';
import './App.css';
import SecondaryAction from './secondaryActions';

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      showChild: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getInitialState (showChild) {
    return { showChild: showChild };
  }

  handleClick(props) {
    this.setState({showChild: !this.state.showChild});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Common Component - <strong> Secondary Actions </strong>
          </h1>
        </div>
        <button type="button" className="button" onClick={this.handleClick}>Open</button>
        {this.state.showChild ? <SecondaryAction show={this.props.show}></SecondaryAction> : null}
      </div>
    );
  }  
}

export default App;
