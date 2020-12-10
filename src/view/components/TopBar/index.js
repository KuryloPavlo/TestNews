import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class TopBar extends React.PureComponent {
    render(){
        const {title, image, onPress} = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => onPress()}
                >
                    <Image 
                        source={image}
                        style={styles.image}    
                    />
                </TouchableOpacity>
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }
}

export default TopBar; 
