// Lesson 4
// // Redux:
// const ADD = 'ADD';

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message
//   }
// };

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };



// const store = Redux.createStore(messageReducer);

// // React:

// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {  
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input
//           value={this.state.input}
//           onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.state.messages.map( (message, idx) => {
//               return (
//                  <li key={idx}>{message}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// };

// const Provider = ReactRedux.Provider;

// class AppWrapper extends React.Component {
//   // Render the Provider below this line
//  constructor(props){
//     super(props)
//   }
// render(){
  
//   return(
//     <Provider store={store}>
//     <DisplayMessages />
//     </Provider>
//   );
// }
//   // Change code above this line
// };

// Lesson 3
// const ADD = "ADD"

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message: message,
//   }
// }

// const messageReducer = (state = [], action) => {
//   switch(action.type){
//     case ADD:
//       return [...state, action.message]
//     default: 
//       return state
//   } 
// }

// const store = Redux.createStore(messageReducer)

// Lesson 2
// class DisplayMessages extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        input: '',
//        messages: []
//      }
//      this.handleChange = this.handleChange.bind(this);
//      this.submitMessage = this.submitMessage.bind(this);
//    }
//    // Add handleChange() and submitMessage() methods here
   
//    handleChange(e) {
//       this.setState({input: e.target.value})
//        };
 
//    submitMessage(){
//     this.setState({
//       input: "",
//       messages: [...this.state.messages, this.state.input]})
//     }
//    render() {
     
//      return (
//        <div>
//          <h2>Type in a new Message:</h2>
//          { /* Render an input, button, and ul below this line */ }
//          <input value={this.state.input} onChange={this.handleChange}/>
//          <button onClick={this.submitMessage}>Add message</button>
//          <ul>
//          {this.state.messages.map(e => <li>{e}</li>)}
//          </ul>
//          { /* Change code above this line */ }
//        </div>
//      );
//    }
//  };

// Lesson 1
// class DisplayMessages extends React.Component {
//    // Change code below this line
//    constructor(props){
//      super(props);
//      this.state ={
//        messages: [],
//        input: "",
//      }
//    }
//    // Change code above this line
//    render() {
//      return <div />
//    }
//  };