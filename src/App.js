import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent'


class App extends Component {
  constructor(props) {
    super(props)
  }

  onClickBtn() {
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onClickBtn() {
    console.log('The button was clicked')
  }
  


  render(){
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn}></MyComponent>
      </div>
    )
  }

}


export default App;
