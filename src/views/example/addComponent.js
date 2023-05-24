import React from "react";

class AddComponent extends React.Component {

    state = {
        player: '',
        salary: '',
    };

    hanldeChangePlayer = (event) => {
        this.setState({
            player: event.target.value
        })
    }

    hanldeChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    hanldeClick = (event) => {
        event.preventDefault();
        alert('ok click nhe');
        console.log('>>>> check data input', this.state)
    }

    render() {
        return(
            <form action="/">
        <label htmlFor="fname">player:</label>
        <br/>
        <input
            type="text"
            value={this.state.player}
            onChange={this.hanldeChangePlayer}      //c1 gọi hàm
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br/>
        <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.hanldeChangeSalary(event)}    //c2 gọi hàm
        />
        <br/>
        <br/>
        <input
            type="submit"
            value="Submit"
            onClick={(event) => this.hanldeClick(event)}
        />
        </form>
        )
        
    }
}

export default AddComponent;