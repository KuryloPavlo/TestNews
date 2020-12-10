import Login from './Login';
import {connect} from 'react-redux';
import {loginUser} from '../../../state/actions/user';

const mapStateToProps = (state) => ({
    loginError: state.user.loginError,
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username,phonenumber) => dispatch(loginUser(username, phonenumber)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Login);