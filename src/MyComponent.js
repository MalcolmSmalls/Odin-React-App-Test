// import React, { Component } from 'react'

// class MyComponent extends Component {
//     constructor(props) {
//         super(props)
//     }



//     render(){
//         const { title, onButtonClicked} = this.props
        
//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <button onClick={onButtonClicked}>Click Me</button>
//             </div>
//         )
//     }
// }


// export default MyComponent



import React, { Component } from 'react'


function MyComponent(props){
    return (
      <div>{props.title}</div>
    )
}

export default MyComponent