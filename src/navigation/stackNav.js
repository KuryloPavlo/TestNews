import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListNews, ReadNews} from '../view';

const Stack = createStackNavigator();

class StackNav extends React.PureComponent {
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name='ListNews' component={ListNews} options={{headerShown: false}}/>
                <Stack.Screen name='ReadNews' component={ReadNews} options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    }
}

export default StackNav;