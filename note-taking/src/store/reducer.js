
const initial = "srikanth@gmail.com";
const reducer = (state = initial, action) => {
    if (action.type === 'Login') {
        return action.payload
    }
    if (action.type === 'Logout') {
        return action.payload
    }
    return state;
}
export default reducer