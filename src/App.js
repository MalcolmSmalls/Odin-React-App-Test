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




// import React, { Component} from 'react'

// class App extends Component {
// 	constructor(){
// 		super()
//     this.state = {
//       count: 0,
//     }

//     this.countUp = this.countUp.bind(this)
// 	}




// 	countUp(){
//     const {count} = this.state
// 		this.setState({
// 			count: this.state.count + 1
// 		})	
// 	}

// 	render(){
//     const {count} = this.state
// 		return (
// 			<div>
// 				<button onClick={this.countUp}>Click Me!</button>
// 				<p>{count}</p>
// 			</div>

// 		)
// 	}

// }


// export default App







// import React, { Component } from 'react'
// import MyComponent from "./MyComponent"
// import Welcome from "./ReactDocs"

// function App(){
//   return (
//     <div>
//       <MyComponent title="UP" />
//       <Welcome name = "Blu Ivy" />
//       <Welcome name = "R.I.P TAKEOFF" />
//       <Welcome name = "SuperFuture" />
//     </div>
//   )
// }


// export default App




// import MyComponent from "./MyComponent"
// import React, { Component } from "react"


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//     }
//     this.countUp = this.countUp.bind(this)
//   }

//   countUp(){
//     const {count} = this.state 
//       this.setState ({
//         count: this.state.count + 1
//       })
//     }
  

//   render(){
//     const {count} = this.state
//     return (
//       <div>
//         <p><button onClick={this.countUp}>Click</button></p>
//         <p>{count}</p>
//       </div>
//     )
//   }
// }

// export default App






// import React, { Component } from "react"

// class App extends Component {
//   constructor(){
//     super()
    
//     this.state = {
//       count:0,
//     }

//     this.countUp = this.countUp.bind(this)
//   }

//   countUp(){
//     const { count } = this.state
//     this.setState ({
//       count: this.state.count + 1
//     })
//   }
  
//   render(){
//     return (
//       <div>
//         <button onClick={this.countUp}>Click Here</button>
//         <p>{this.state.count}</p>
//       </div>
//     )
//   }

// }

// export default App








import React, { Component } from "react"

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount() {
		this.timerID = setInterval(
			() =>  this.tick(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick(){
		this.setState({
			date: new Date()
		})
	}

	render(){
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
			)
	}
}

// class Clock extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       count:0,
//     }

//     this.countUp = this.countUp.bind(this)
//   }

//   countUp(){
//     const { count } = this.state
//     this.setState ({
//       count: this.state.count + 1
//     })
//   }

//   render(){
//     return(
//       <div>
//         <p><button onClick={this.countUp}></button></p>
//         <p>{this.state.count}</p>
//       </div>
//     )
//   }

// }

export default Clock