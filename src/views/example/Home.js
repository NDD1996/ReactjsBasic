import React from "react";
import { withRouter } from "react-router";
import { Outlet } from "react-router-dom";
import logo from  '../../assets/images/dat.jpeg'
import { connect } from "react-redux";


class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 2000);
    // }

    render() {
        console.log(this.props.dataRedux)
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

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users[0].id
    }
}

export default connect(mapStateToProps)(Home);