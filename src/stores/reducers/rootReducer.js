

const initState = {
    users: [
        {id:1, name: 'Đạt'},
        {id:2, name: 'Đức'}
    ]
}

// hàm lưu trữ dữ liệu redux
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;