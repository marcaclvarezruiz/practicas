import {StyleSheet} from "react-native";

const stylesUserConfig = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(245,95,75)'
    }, space: {
        flex: 1,
    }, headerCloseContainer: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 25
    }, imageContainer: {
        paddingLeft: 25
    }, image: {
        width: 50,
        height: 50,
    }, imageUserBig: {
        height: 80,
        width: 80,
        borderRadius: 40,
    }, content: {
        paddingLeft: '10%',
        color: 'white',
    }, options: {
        paddingLeft: '20%',
        paddingBottom: '10%'
    }, title: {
        fontSize: 20,
        color: 'white',
        paddingLeft: '10%'
    }, subtitle: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: 'white',
        paddingLeft: '10%',
        paddingBottom: '10%'
    }
})
export {stylesUserConfig}
