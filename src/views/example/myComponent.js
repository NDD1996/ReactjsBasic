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

    
    render() {
        console.log('>>>> data input:', this.state )

    return (
    <>
        <AddComponent/>

        <ChildComponent
            arr = {this.state.arr}
        />

    </>
        );
    }
}

export default MyComponent;
