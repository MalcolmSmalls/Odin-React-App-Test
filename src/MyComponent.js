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
    const { title } = props
    return (
      <div>{title}</div>
    )
}

export default MyComponent