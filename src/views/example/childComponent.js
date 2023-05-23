import React from "react";

class ChildComponent extends React.Component {

    render() {
        // console.log('>>>> data input:', this.state )
        let {name, age, arr} = this.props;
    return (
    <>
        <div>
            ChildComponent: {name} - {age}
        </div>
        <div>
            {
                arr.map((item,index) => {
                    return (
                        <div>
                            {item.player} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
    </>
        );
    }
}

export default ChildComponent;
