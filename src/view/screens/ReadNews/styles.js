import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    titleContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 3,
        marginHorizontal: 10,
    },
    image: {
        flex: 1,
        width: 200,
        height: 160,
    },
    titleText: {
        maxWidth: 200,
        fontWeight: 'bold',
        fontSize: 18
    },
    dateText: {
        marginTop: 30,
        opacity: 0.5,
    }

})

export default styles;