import React from 'react';
import {View,Text,Image,TextInput, TouchableOpacity} from 'react-native';
import {TopBar} from '../../components';
import {MenuICN, UserICN} from '../../../assets';
import styles from './styles';

class Profile extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            phonenumber: ''
        }
    }

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    onTextChange = (text) => {
        this.setState({
            phonenumber: text
        })
    }

    render(){
        const {user} = this.props;
        const {phonenumber} = this.state;
        return(
            <View style={{flex: 1}}>
                <TopBar title='Profile' image={MenuICN} onPress={this.openDrawer}/>
                <View>
                    <View style={styles.container}>
                        <Image 
                            source={UserICN}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{opacity: 0.5}}>User name</Text>
                            <Text style={styles.titleText}>{user.username}</Text>
                            <Text style={{opacity: 0.5}}>Phonenumber</Text>
                            <Text style={styles.titleText}>{user.phonenumber}</Text>
                            <TextInput 
                                onChangeText= {this.onTextChange}
                                placeholder={'Change phonenumber'}
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 150}}>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => this.props.addPhone(phonenumber)}
                        >
                            <Text style={styles.buttonText}> Save </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={this.props.logoutUser}
                        >
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Profile;