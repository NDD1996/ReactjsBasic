import React from "react";

// class component
class ChildComponent extends React.Component {

    state = {
        flag: false
    }

    hanldeShowHide = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        // console.log('>>>> data input:', this.state )
        let {arr} = this.props;
        let {flag} = this.state;
    return (
        <>
            {flag === false ?
                <div>
                    <button onClick={() => this.hanldeShowHide()}>show</button>
                </div>
            :
            <>
                <div>
                    {
                        arr.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {item.player} - {item.salary} $
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => this.hanldeShowHide()}>hide</button>
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
