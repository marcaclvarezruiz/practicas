import {StyleSheet} from 'react-native';

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }, spaces: {
        flex: 1,
    }, title: {
        fontSize: 24,
        width: '100%',
        textAlign: 'center'
    }, titleContainer: {
        paddingLeft: 10,
        marginHorizontal: '15%'
    }, image: {
        width: 100,
        height: '100%'
    }, imageContainer: {
        height: 100,
        marginLeft: '30%',
        marginRight: '30%',
        alignItems: 'center'
    }, registerForm: {
        flex: 1,
    }, registerContainer: {
        marginHorizontal: '10%',
        height: 150,
    }, inputField: {
        width: '100%',
        height: '25%',
        marginBottom: 10
    }, buttonContainer: {
        alignItems: 'center',
        bottom: 0,
        position: "absolute",
        width: '100%',
        height: '30%'
    }, button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: '50%',
        height: '100%',
        backgroundColor: 'orange'
    }
})
export {stylesLoginScreen}
