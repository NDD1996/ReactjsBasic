import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/myComponent.js";
import ListTodo from "./todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./nav/Nav";
import Home from "./example/Home";

import { BrowserRouter, Outlet, Route, Link, Routes } from "react-router-dom";

/*
 * components: class component | function component
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
            <Routes>

              <Route path="/" element= {<Home />} />
                <Route path="/todos" element= {<ListTodo />} />
                <Route path="/about" element= {<MyComponent />} />

            </Routes>

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
    </BrowserRouter>
  );
}

export default App;
