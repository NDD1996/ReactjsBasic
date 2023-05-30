import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', player: 'Messi'},
            {id: 'todo2', player: 'Ronaldo'},
            {id: 'todo3', player: 'Neymar'}
        ],

        editTodo: ''
    };

    addNewPlayer = (player) => {
        this.setState({
            listTodos: [...this.state.listTodos, player]
        })

        toast.success("add thành công")
    }

    handleDelete = (player) => {
        let currentPlayer = this.state.listTodos;

        currentPlayer = currentPlayer.filter(item => item.id !== player.id)
        
        this.setState({
            listTodos: currentPlayer
        })

        alert('bạn có muốn xóa khum')  
        
        toast.success("xóa thành công")

    }

    handleEdit = (player) => {

        let { editTodo, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length

        //save
        if(isEmptyObj >0 && editTodo.id === player.id) {
            console.log(editTodo)
            let listTodosCopy = [...listTodos];

            let obj = listTodosCopy.find(item => item.id === player.id)

            obj.player = editTodo.player
            
            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''

            })
            return
        }   
        
        //edit
        this.setState({
            editTodo: player
        })
    }

    handleOnchangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.player = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length
        

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewPlayer = {this.addNewPlayer}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length >0 &&
                        listTodos.map((item,index) => {
                            return(
                                <div className="todo-child" key={item.id}>

                                    {isEmptyObj >0 && editTodo.id === item.id ?
                                        <span>
                                        <input value={editTodo.player}
                                            onChange={this.handleOnchangeEdit}
                                        />
                                        </span>
                                        :
                                        <span>{index + 1} - {item.player} </span>
                                    }

                                    <button className="edit"
                                        onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj > 0 && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>

                                    <button className="delete"
                                        onClick={() => this.handleDelete(item)}>Delete
                                    </button>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;