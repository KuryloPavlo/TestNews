import React from 'react';
import DrawerNav from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/state/store';
import {NavigationContainer} from '@react-navigation/native';

class App extends React.PureComponent {
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNav/>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;