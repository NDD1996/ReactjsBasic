import React from "react";
import ChildComponent from "./childComponent.js";
import AddComponent from "./addComponent.js";

class MyComponent extends React.Component {
    state = {
        arr: [
            {
                id: 1,
                player: 'messi',
                salary: '1000'
            },
            {
                id: 2,
                player: 'ronaldo',
                salary: '2000'
            }
        ]
    };

    addNewPlayer = (player) => {
        this.setState({
            arr: [...this.state.arr, player]
        })
    }

    deletePlayer = (player) => {
        let currentPlayer = this.state.arr;
        currentPlayer = currentPlayer.filter(item => item.id !== player.id);
        this.setState({
            arr: currentPlayer
        })
    }

    render() {
        console.log('>>>> data input:', this.state )

    return (
    <>
        <AddComponent
            addNewPlayer = {this.addNewPlayer}
        />

        <ChildComponent
            arr = {this.state.arr}
            deletePlayer = {this.deletePlayer}
        />

    </>
        );
    }
}

export default MyComponent;
