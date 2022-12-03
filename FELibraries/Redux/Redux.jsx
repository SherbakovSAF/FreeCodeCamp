// Lesson 8
// const LOGIN = 'LOGIN'
// const LOGOUT = 'LOGOUT'

// const defaultState = {
//   authenticated: false
// };

// const authReducer = (state = defaultState, action) => {

//   switch (action.type) {
//     case LOGIN: 
//       return {
//         authenticated: true
//       }
//     case LOGOUT: 
//       return {
//         authenticated: false
//       }

//     default:
//       return state;

//   }

// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//   return {
//     type: LOGIN
//   }
// };

// const logoutUser = () => {
//   return {
//     type: LOGOUT
//   }
// };

// Lesson 7
// const defaultState = {
//    authenticated: false
//  };
 
//  const authReducer = (state = defaultState, action) => {
//    // Change code below this line
//  switch (action.type) {
//    case "LOGIN":
//    return {authenticated: true}
//    case "LOGOUT":
//    return {authenticated: false}
//    default:
//    return state
//  }
//    // Change code above this line
//  };
 
//  const store = Redux.createStore(authReducer);
 
//  const loginUser = () => {
//    return {
//      type: 'LOGIN'
//    }
//  };
 
//  const logoutUser = () => {
//    return {
//      type: 'LOGOUT'
//    }
//  };

// Lesson 6
// const defaultState = {
//     login: false,
// };

// const reducer = (state = defaultState, action) => {

//     if ((action.type == "LOGIN")) {
//         return { login: true };
//     } else {
//         return state;
//     }
// };

// const store = Redux.createStore(reducer);

// const loginAction = () => {
//     return {
//         type: "LOGIN",
//     };
// };

// Lesson 5
// const store = Redux.createStore(
//    (state = {login: false}) => state
//  );
 
//  const loginAction = () => {
//    return {
//      type: 'LOGIN'
//    }
//  };
 
//  // Dispatch the action here:
 
//  store.dispatch(loginAction())

// Lesson 4
// const action = {
//    type: 'LOGIN'
//  }
//  // Define an action creator here:
 
//  function actionCreator() {
//    return action
//  }

// Lesson 3
// let action = {
//    type: "LOGIN"
//  }

// Lesson 2
// const store = Redux.createStore(
//    (state = 5) => state
//  );
//  const currentState = store.getState()

// Lesson 1
// const reducer = (state = 5) => {
//    return state;
//  }

//  const store = Redux.createStore(reducer)