import React from "react";
import {  toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        player: ''
    }

    handlePlayer = (event) => {
        this.setState({
            player: event.target.value
        })
    }

    handleAdd = (event) => {
        if(!this.state.player) {
            toast.error("Không được để trống")
            return
        }
        let player = {
            id: Math.floor(Math.random()*101),
            player: this.state.player
        }

        this.props.addNewPlayer(player)

        this.setState({
            player: ''
        })
        console.log('<<<<<list player', this.state)
    }
    
    render() {
        return(
            <div className="add-todo">
                <input type="text"  value={this.state.player}
                    onChange={this.handlePlayer}
                />
                <button type="button" className="add"
                    onClick={this.handleAdd}>Add
                </button>
            </div>
        )
    }
}

export default AddTodo;