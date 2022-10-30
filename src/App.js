import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <div>
        <MyComponent title="React"></MyComponent>
      </div>
    )
  }

}


export default App;
