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
    handleAddUser = () => {
        // console.log('add user')
        this.props.addUserRedux();
    }

    handleDeleteUser = (user) => {
        // console.log(user)
        this.props.deleteUserRedux(user);
    }

    render() {
        // console.log(this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
            <div>
                Hello world from Home Page
            {/* <div>

            <Outlet />
            </div> */}
            </div>
            <span onClick={this.handleAddUser}>+</span>
            {/* <div>
                <img src={logo} style={{ width: "500px", height: "500px", margin: "10px" }}/>
            </div> */}
            <div>
                {listUsers && listUsers.length>0 &&
                    listUsers.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {index +1} - {item.name} 
                                &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span> 
                            </div>
                        )
                    })
                }
            </div>
            </>
        )
    }
}

// state redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users              // redux return cái gì thì state là cái đó
    }
}


//action redux
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => {

            // dispatch(a): a chính là tham số action của function redux
            dispatch({type: 'DELETE_USER', payload: userDelete})
        },

        addUserRedux: () => {

            // dispatch(a): a chính là tham số action của function redux
            dispatch({ type: 'ADD_USER' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);          // connect để kết nối react vs redux tại file Home.js này
