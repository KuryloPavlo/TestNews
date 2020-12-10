import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';

class NewsItem extends React.PureComponent{
    componentDidMount() {
        console.log(this.props);
    }
    render(){
        const {item, onPress} = this.props;
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => onPress(item)}
            >
                <Image source={{uri: item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export {NewsItem};