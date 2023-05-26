import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./example/myComponent.js";
import ListTodo from "./todos/ListTodo";

/*
 * components: class component | function component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          simple TODO Apps with React.js (Ndd)
        </p>
        <ListTodo />
        {/* <MyComponent /> */}
      </header>
    </div>
  );
}

export default App;
