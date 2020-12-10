import React from 'react';
import {View, Text, Image} from 'react-native';
import {TopBar} from '../../components';
import {ArrowICN} from '../../../assets';

import styles from './styles';

class ReadNews extends React.PureComponent {
    componentDidMount() {
        console.log(this.props);
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    render(){
        const {item} = this.props.route.params;
        return(
            <View style={{flex: 1}}>
                <TopBar title='News' image={ArrowICN} onPress={this.goBack}/>
                <View style={styles.container}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text>{item.text}</Text>
                </View>
            </View>
        )
    }
}

export default ReadNews;