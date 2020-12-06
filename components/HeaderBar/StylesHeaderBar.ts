import {StyleSheet} from 'react-native';

const stylesHeaderBar = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        flexDirection: "row",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 2,
    }, menuIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, titleAndLogoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, profilePicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, image: {
        width: 35,
        height: 35,
    }, imageUser: {
        width: 35,
        height: 35,
        borderRadius: 40
    }, profileImageContainer: {
        height: 35,
        width: 35,
        borderRadius: 40,
        overflow: 'hidden',
        borderColor: 'rgb(245,95,75)',
        borderWidth: 1
    }
})
export {stylesHeaderBar}
