import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#311957'
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textTitle: {
        flex: 1,
        maxWidth: 250,
        fontWeight: 'bold'
    },
    dateText: {
        opacity: 0.5
    }
})

export default styles;