import Const from './const';

export const loginUser = (username, password) => (dispatch, getState) => {
    if (username === getState().user.user.username && password === getState().user.user.password){
        dispatch({
            type: Const.user.login,
        });
    } else {
        dispatch({
            type: Const.user.loginError
        })
    }
}

export const logoutUser = () => ({
  type: Const.user.logout  
})

export const addPhone = (phonenumber) => ({
  type: Const.user.addPhone,
  payload: phonenumber,  
})