import React from "react";
import './Nav.scss'
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <div className="topnav">
                <NavLink to= "/" activeClassName = "active" exact = {true}>
                    Home
                </NavLink>

                <NavLink to= "/todos" activeClassName = "active">
                    Todos
                </NavLink>

                <NavLink to= "/about" activeClassName = "active">
                    About
                </NavLink>
                
                
                {/* <Link to="/">Home</Link>           không load lại trang
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}

                {/* <a className="active" href="/">Home</a>     cách bt
                <a href="/todos">Todos</a>
                <a href="/about">About</a> */}
            </div>
        )
    }
}

export default Nav;