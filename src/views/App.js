import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./example/myComponent.js";
import ListTodo from "./todos/ListTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
 * components: class component | function component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>simple TODO Apps with React.js (Ndd)</p>
        <ListTodo />
        {/* <MyComponent /> */}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
