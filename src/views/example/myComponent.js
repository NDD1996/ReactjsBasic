import React from 'react';

class MyComponent extends React.Component {


    state = {
        name: "nguyễn Đạt",
        age: 18,
        adress: "Bắc Ninh"
    }

    render() {


        let name = 'Nguyễn Đức Đạt';

        return(
            <>
            <div>
                hello my name is {name}
            </div>
            <div>
                age is: {this.state.age}
            </div>
            </>
        )
    }
}

export default MyComponent;