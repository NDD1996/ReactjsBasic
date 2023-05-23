import React from "react";
import ChildComponent from "./childComponent";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arr: [
            {
                id: 1,
                player: 'messi',
                salary: '1000$'
            },
            {
                id: 2,
                player: 'ronaldo',
                salary: '2000$'
            }
        ]
    };



    hanldeChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    hanldeChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    hanldeClick = (event) => {
        event.preventDefault();
        alert('ok click nhe');
    }
    render() {
        console.log('>>>> data input:', this.state )

    return (
    <>
        <form action="/">
        <label htmlFor="fname">First name:</label>
        <br/>
        <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.hanldeChangeFirstName(event)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br/>
        <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.hanldeChangeLastName(event)}
        />
        <br/>
        <br/>
        <input
            type="submit"
            value="Submit"
            onClick={(event) => this.hanldeClick(event)}
        />
        </form>

        <ChildComponent
            name = {this.state.firstName}
            age = {27}
            arr = {this.state.arr}
        />

    </>
        );
    }
}

export default MyComponent;
