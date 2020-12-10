import Const from '../actions/const';

const initialState = {
    user: {
        username: 'User',
        password: '123456',
        phonenumber: '',
    },
    isAuthenticated: false,
    loginError: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Const.user.login:
            return{
                ...state,
                isAuthenticated: true,
                loginError: false,
            }
        case Const.user.logout:
            return{
                ...state,
                isAuthenticated: false,
            }
        case Const.user.addPhone:
            return{
                ...state,
                user: {
                    ...state.user,
                    phonenumber: action.payload,
                }
            }
        case Const.user.loginError:
            return{
                ...state,
                loginError: true,
            }
        default:
            return state
    }
};