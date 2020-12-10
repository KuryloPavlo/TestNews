import DrawerNav from './drawerNav';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
})


export default connect(mapStateToProps)(DrawerNav);