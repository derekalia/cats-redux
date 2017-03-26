import React from 'react';
import Lend from '../containers/lend';
import Borrow from '../containers/borrow';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'borrow'
    };
  }
   
  handleClick(e) {    
    this.setState({
      toggle: e.target.name
    });    
  }

  render() {
    return (
      
      <div>
      <button name='borrow' onClick={this.handleClick.bind(this)}>borrow</button>
      <button name='lend' onClick={this.handleClick.bind(this)}>lend</button>
      <Borrow toggle={this.state.toggle}/>
      <Lend toggle={this.state.toggle}/>
      </div>
    ); 
  }
}