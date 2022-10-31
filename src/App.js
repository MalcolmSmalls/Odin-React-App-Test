// import './App.css';
// import React, { Component } from 'react';
// import MyComponent from './MyComponent'


// class App extends Component {
//   constructor() {
//     super()
//   }

//   onClickBtn() {
//     this.onClickBtn = this.onClickBtn.bind(this)
//   }

//   onClickBtn() {
//     console.log('The button was clicked')
//   }
  


//   render(){
//     return (
//       <div>
//         <MyComponent title="React" onButtonClicked={this.onClickBtn}></MyComponent>
//       </div>
//     )
//   }

// }


// export default App;




import React, { Component} from 'react'

class App extends Component {
	constructor(){
		super()


    this.state = {
      count: 0,
    }

    this.countUp = this.countUp.bind(this)
	}




	countUp(){
		this.setState({
			count: this.state.count + 1
		})	
	}

	render(){
		return (
			<div>
				<button onClick={this.countUp}>Click Me!</button>
				<p>{this.state.count}</p>
			</div>

		)
	}

}


export default App