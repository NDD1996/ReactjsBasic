import React from "react";
import { withRouter } from "react-router";
import { Outlet } from "react-router-dom";
import logo from  '../../assets/images/dat.jpeg'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 2000);
    // }

    render() {
        console.log(this.props)
        return (
            <>
            <div>
                Hello world from Home Page
            {/* <div>

            <Outlet />
            </div> */}
            </div>
            <div>
                <img src={logo} style={{ width: "500px", height: "500px", margin: "10px" }}/>
            </div>
            </>
        )
    }
}

export default Home;