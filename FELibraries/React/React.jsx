// Lesson 27
// class Counter extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        count: 0
//      };
//      this.increment = this.increment.bind(this);
//      this.decrement = this.decrement.bind(this);
//      this.reset = this.reset.bind(this);
     
//    }
//    increment(){
//      this.setState((state, props) => ({
//        count: state.count + 1
//      }))
//    }
//    decrement(){
//      this.setState((state, props) => ({
//        count: state.count - 1
//      }))
//    }
//    reset(){
//      this.setState((state, props) => ({
//        count: state.count = 0
//      }))
//    }
//    render() {
//      return (
//        <div>
//          <button className='inc' onClick={this.increment}>Increment!</button>
//          <button className='dec' onClick={this.decrement}>Decrement!</button>
//          <button className='reset' onClick={this.reset}>Reset</button>
//          <h1>Current Count: {this.state.count}</h1>
//        </div>
//      );
//    }
//  };

// Lesson 26
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        visibility: false
//      };
//      // Change code below this line
//      this.toggleVisibility = this.toggleVisibility.bind(this);
//      // Change code above this line
//    }
//    // Change code below this line
//  toggleVisibility() {
//      this.setState((state, props) => ({
//        visibility: !state.visibility
//      }))
//    }
 
//    // Change code above this line
//    render() {
//      if (this.state.visibility) {
//        return (
//          <div>
//            <button onClick={this.toggleVisibility}>Click Me</button>
//            <h1>Now you see me!</h1>
//          </div>
//        );
//      } else {
//        return (
//          <div>
//            <button onClick={this.toggleVisibility}>Click Me</button>
//          </div>
//        );
//      }
//    }
//  }
 // --------------------------------------------------------
// Lesson 25
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        text: "Hello"
//      };
//      // Change code below this line
//    this.handleClick = this.handleClick.bind(this)
//      // Change code above this line
//    }
//    handleClick() {
//      this.setState({
//        text: "You clicked!"
//      });
//    }
//    render() {
//      return (
//        <div>
//          { /* Change code below this line */ }
//          <button onClick={this.handleClick}>Click Me</button>
//          { /* Change code above this line */ }
//          <h1>{this.state.text}</h1>
//        </div>
//      );
//    }
//  };
 // --------------------------------------------------------
// Lesson 24
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'Initial State'
//        };
//        this.handleClick = this.handleClick.bind(this);
//      }
//      handleClick() {
//        // Change code below this line
//    this.setState({
//      name: "React Rocks!"
//    })
//        // Change code above this line
//      }
//      render() {
//        return (
//          <div>
//            <button onClick={this.handleClick}>Click Me</button>
//            <h1>{this.state.name}</h1>
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 23
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'freeCodeCamp'
//        }
//      }
//      render() {
//        // Change code below this line
//    const name = this.state.name
//        // Change code above this line
//        return (
//          <div>
//            { /* Change code below this line */ }
//    <h1>{name}</h1>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 22
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'freeCodeCamp'
//        }
//      }
//      render() {
//        return (
//          <div>
//            { /* Change code below this line */ }
//            <h1>{this.state.name}</h1>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 21
// class StatefulComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        // Only change code below this line
//        this.state = {
//          firstName: "nfad"
//        }
//        // Only change code above this line
//      }
//      render() {
//        return (
//          <div>
//            <h1>{this.state.firstName}</h1>
//          </div>
//        );
//      }
//    };
   // --------------------------------------------------------
// Lesson 20
// class CampSite extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <Camper />
//          </div>
//        );
//      }
//    };
//    // Change code below this line
//    class Camper extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <p>{this.props.name}</p>
//          </div>
//        );
//      }
//    };
   
//    Camper.defaultProps = {
//      name: "CamperBot"
//    };
//    Camper.propTypes = {name: PropTypes.string.isRequired};
// --------------------------------------------------------
// Lesson 19
// class App extends React.Component {
//      constructor(props) {
//        super(props);
   
//      }
//      render() {
//        return (
//            <div>
//                { /* Change code below this line */ }
//                <Welcome name="Sergey"/>
//                { /* Change code above this line */ }
//            </div>
//        );
//      }
//    };
   
//    class Welcome extends React.Component {
//      constructor(props) {
//        super(props);
   
//      }
//      render() {
//        return (
//            <div>
//              { /* Change code below this line */ }
//              <p>Hello, <strong>{this.props.name}</strong>!</p>
//              { /* Change code above this line */ }
//            </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 18
// const Items = (props) => {
//      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//    };
   
//    // Change code below this line
//    Items.propTypes = {quantity: PropTypes.number.isRequired}
//    // Change code above this line
   
//    Items.defaultProps = {
//      quantity: 0
//    };
   
//    class ShoppingCart extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return <Items />
//      }
//    };
// --------------------------------------------------------
// Lesson 17
// const Items = (props) => {
//      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//    }
   
//    Items.defaultProps = {
//      quantity: 0
//    }
   
//    class ShoppingCart extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        { /* Change code below this line */ }
//        return <Items quantity={10}/>
//        { /* Change code above this line */ }
//      }
//    };
// --------------------------------------------------------
// Lesson 16
// const ShoppingCart = (props) => {
//      return (
//        <div>
//          <h1>Shopping Cart Component</h1>
//        </div>
//      )
//    };
//    // Change code below this line
   
//    ShoppingCart.defaultProps = {
//      items: 0
//    }
// --------------------------------------------------------
// Lesson 15
// const List = (props) => {
//      { /* Change code below this line */ }
//      return <p>{props.tasks.join(", ")}</p>
//      { /* Change code above this line */ }
//    };
   
//    class ToDo extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>To Do Lists</h1>
//            <h2>Today</h2>
//            { /* Change code below this line */ }
//            <List tasks={["walk dog", "workout"]}/>
//            <h2>Tomorrow</h2>
//            <List tasks={["walk dog", "workout", "eat"]}/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 14
// const CurrentDate = (props) => {
//      return (
//        <div>
//          { /* Change code below this line */ }
//          <p>The current date is: {props.date}</p>
//          { /* Change code above this line */ }
//        </div>
//      );
//    };
   
//    class Calendar extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h3>What date is it?</h3>
//            { /* Change code below this line */ }
//            <CurrentDate date={Date()}/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 13
// Change code below this line
// class MyComponent extends React.Component {
//      constructor(props){
//        super(props)
//      }
//      render() {
//        return (
//          <div id='challenge-node'>
//            <h1>My First React Component!</h1>
//          </div>
//        )
//      }
//    }
   
//    ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 12
// class TypesOfFood extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div id="challenge-node">
//            <h1>Types of Food:</h1>
//            {/* Change code below this line */}
//    <Fruits/>
//    <Vegetables/>
//            {/* Change code above this line */}
//          </div>
//        );
//      }
//    };
   
//    // Change code below this line
//    ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 11
// class Fruits extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h2>Fruits:</h2>
//            { /* Change code below this line */ }
//              <NonCitrus />
//              <Citrus />
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
   
//    class TypesOfFood extends React.Component {
//      constructor(props) {
//         super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>Types of Food:</h1>
//            { /* Change code below this line */ }
//    <Fruits/>
//            { /* Change code above this line */ }
//            <Vegetables />
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 10
// const TypesOfFruit = () => {
//      return (
//        <div>
//          <h2>Fruits:</h2>
//          <ul>
//            <li>Apples</li>
//            <li>Blueberries</li>
//            <li>Strawberries</li>
//            <li>Bananas</li>
//          </ul>
//        </div>
//      );
//    };
   
//    const Fruits = () => {
//      return (
//        <div>
//          { /* Change code below this line */ }
//            <TypesOfFruit />
//          { /* Change code above this line */ }
//        </div>
//      );
//    };
   
//    class TypesOfFood extends React.Component {
//      constructor(props) {
//        super(props);
//      }
   
//      render() {
//        return (
//          <div>
//            <h1>Types of Food:</h1>
//            { /* Change code below this line */ }
//            <Fruits />
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 9
// const ChildComponent = () => {
//      return (
//        <div>
//          <p>I am the child</p>
//        </div>
//      );
//    };
   
//    class ParentComponent extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>I am the parent</h1>
//            { /* Change code below this line */ }
   
//    <ChildComponent/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 8
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // Change code below this line
//         return (
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         );

//         // Change code above this line
//     }
// }
// --------------------------------------------------------
// Lesson 7
// const MyComponent = function() {
//    return (
//      <div>авыавы</div>
//    )
//    }
// --------------------------------------------------------
// Lesson 6
// const JSX = (
//      <div>
//        <h2>Welcome to React!</h2> <br />
//        <p>Be sure to close all tags!</p>
//        <hr />
//      </div>
//    );
// --------------------------------------------------------
// Lesson 5
// const JSX = (
//      <div className="myDiv">
//        <h1>Add a class to this div</h1>
//      </div>
//    );
// --------------------------------------------------------
// Lesson 4
// const JSX = (
//      <div >
//        <h1>Hello World</h1>
//        <p>Lets render this to the DOM</p>
//      </div>
//    );
//    // Change code below this line

//    ReactDOM.render(JSX, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 3
// const JSX = (
//      <div>
//        <h1>This is a block of JSX</h1>
//        <p>Here's a subtitle</p>
//        {/* Комментарий */}
//      </div>
//    );
// --------------------------------------------------------
// Lesson 2
// const JSX = (
//     <div>
//         <h1></h1>
//         <p></p>
//         <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//     </div>
// );
// --------------------------------------------------------
// Lesson 1
// const JSX = <h1>Hello JSX!</h1>;
// --------------------------------------------------------
