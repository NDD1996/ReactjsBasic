import React from "react";

// class component
class ChildComponent extends React.Component {

    state = {
        flag: false
    }

    handleShowHide = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    handleDelete = (event) => {
        this.props.deletePlayer(event);
    }

    render() {
        // console.log('>>>> data input:', this.state )
        let {arr} = this.props;
        let {flag} = this.state;
    return (
        <>
            {flag === false ?
                <div>
                    <button onClick={() => this.handleShowHide()}>show</button>
                </div>
            :
            <>
                <div>
                    {
                        arr.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {item.player} - {item.salary} $<span onClick={() => this.handleDelete(item)}> X</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => this.handleShowHide()}>hide</button>
                </div>
            </>
            }
        </>
        );
    }
}

//function component

// const ChildComponent = (props) => {
//     let {name, age, arr } = props;
//     return (
//         <>
//             <div>
//                 ChildComponent: {name} - {age}
//             </div>
//             <div>
//                 {
//                     arr.map((item,index) => {
//                         return (
//                             <div>
//                                 {item.player} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//             );
// }

export default ChildComponent;
