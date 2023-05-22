import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
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
        // let name = 'Nguyễn Đức Đạt';

    return (
    <>
        <form action="/">
        <label htmlfor="fname">First name:</label>
        <br/>
        <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.hanldeChangeFirstName(event)}
        />
        <br />
        <label htmlfor="lname">Last name:</label>
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
    </>
        );
    }
}

export default MyComponent;
