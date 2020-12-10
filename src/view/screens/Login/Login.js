import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {TopBar} from '../../components';
import {MenuICN} from '../../../assets';
import styles from './styles';

class Login extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onLogin = () => {
        const {username, password} = this.state;
        this.props.loginUser(username,password);
    }

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    render(){
        const {loginError} = this.props;
        return(
            <View style={{flex: 1}}>
                <TopBar title='Login' image={MenuICN} onPress={this.openDrawer}/>
                <View style={styles.loginContainer}>
                    <Text style={styles.titleText}>Enter the data</Text>
                    <TextInput 
                        placeholder={'username'}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            this.setState({
                                username: text
                            })
                        }}
                    />
                    <TextInput 
                        placeholder={'password'}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.onLogin}
                    >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    {loginError && (<Text style={styles.errorText}>Incorrect username or password</Text>)}
                </View>
            </View>
        )
    }
}

export default Login;