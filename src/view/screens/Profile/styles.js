import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 150,
    },
    textContainer: {
        marginRight: 60,
    },
    buttonContainer: {
        backgroundColor: '#311957',
        paddingVertical: 25,
        marginVertical: 15,
        borderRadius: 10,
        marginHorizontal: 50,
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginLeft: 10
    },
    titleText: {
        fontSize: 18,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})

export default styles;