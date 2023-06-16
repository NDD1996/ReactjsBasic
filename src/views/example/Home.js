import React from "react";
import { withRouter } from "react-router";
import { Outlet } from "react-router-dom";

class Home extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                Hello world from Home Page
            {/* <div>

            <Outlet />
            </div> */}
            </div>
        )
    }
}

export default Home;