// Lesson 8
 // Redux:
// const ADD = 'ADD';

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message: message
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
// class Presentational extends React.Component {
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

// // React-Redux:
// const mapStateToProps = (state) => {
//   return { messages: state }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewMessage: (newMessage) => {
//        dispatch(addMessage(newMessage))
//     }
//   }
// };

// const Provider = ReactRedux.Provider;
// const connect = ReactRedux.connect;

// // Define the Container component here:
// const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

// class AppWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // Complete the return statement:
//     return (
//       <Provider store={store}>
//         <Container/>
//       </Provider>
//     );
//   }
// };

// Lesson 7
// const addMessage = (message) => {
//      return {
//        type: 'ADD',
//        message: message
//      }
//    };
   
//    const mapStateToProps = (state) => {
//      return {
//        messages: state
//      }
//    };
   
//    const mapDispatchToProps = (dispatch) => {
//      return {
//        submitNewMessage: (message) => {
//          dispatch(addMessage(message));
//        }
//      }
//    };
   
//    class Presentational extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return <h3>This is a Presentational Component</h3>
//      }
//    };
   
//    const connect = ReactRedux.connect
//    // Change code below this line
//    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// Lesson 6
// const addMessage = (message) => {
//      return {
//        type: 'ADD',
//        message: message
//      }
//    };
   
//    // Change code below this line
   
//    function mapDispatchToProps(dispatch){
//      return {
//        submitNewMessage: function(message){
//          dispatch(addMessage(message))
//        }
//      }
//    }

// Lesson 5
// const state = [];

// Change code below this line

// function  mapStateToProps(state){
//   return {
//     messages: state
//   }
// }

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