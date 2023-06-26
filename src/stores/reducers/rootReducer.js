

const initState = {
    users: [
        {id:1, name: 'Đạt'},
        {id:2, name: 'Đức'},
        {id:3, name: "Nguyễn"}
    ],
    post: [],
}

// function lưu trữ dữ liệu redux
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete', action.payload)

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            console.log(users)
            return {
                ...state, users
            };

        case 'ADD_USER':
            console.log('add userSSS')
            let user = {id:4, name: 'testAdd'}
            return {
                ...state, users: [...state.users, user]
            }

        default:
            return state;
    }
}

export default rootReducer;