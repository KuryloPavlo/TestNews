import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textInputContainer: {
        marginVertical: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingRight: 150,
        borderColor: '#311957'
    },
    buttonContainer: {
        backgroundColor: '#311957',
        marginTop: 140,
        paddingVertical: 20,
        paddingHorizontal: 85,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        color: '#311957',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default styles;