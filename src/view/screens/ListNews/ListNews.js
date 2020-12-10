import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {TopBar} from '../../components';
import {MenuICN} from '../../../assets';
import {NewsItem} from './components';
import styles from './styles';

class ListNews extends React.PureComponent {

    componentDidMount() {
        this.props.loadNews();
    }

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    onListItemPress = (item) => {
        this.props.navigation.navigate('ReadNews', {item})
    }

    render(){
        const {news} = this.props;
        return(
            <View style={{flex: 1}}>
                <TopBar title='List of News' image={MenuICN} onPress={this.openDrawer}/>
                <FlatList
                    data={news}
                    keyExtractor = {i => i.id.toString()}
                    renderItem= {({item}) => (
                        <NewsItem item={item} onPress={this.onListItemPress} />
                    )}
                />
            </View>
        )
    }
}

export default ListNews;