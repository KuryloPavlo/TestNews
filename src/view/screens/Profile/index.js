import Profile from './Profile';
import {logoutUser,addPhone} from '../../../state/actions/user';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    user: state.user.user,
}) 

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
    addPhone: (phonenumber) => dispatch(addPhone(phonenumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);