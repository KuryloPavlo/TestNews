import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Login,Profile} from '../view';
import StackNav from './stackNav';

const Drawer = createDrawerNavigator();

class DrawerNav extends React.PureComponent {
    render(){
        const {isAuthenticated} = this.props;
        return(
            <Drawer.Navigator>
                <Drawer.Screen name='News' component={StackNav}/>
                {!isAuthenticated && (<Drawer.Screen name='Login' component={Login} />)}
                {isAuthenticated && (<Drawer.Screen name='Profile' component={Profile} />)}
            </Drawer.Navigator>
        )
    }
}

export default DrawerNav;
