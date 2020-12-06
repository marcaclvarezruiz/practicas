import {StyleSheet} from "react-native";

const stylesDeliveryBox = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        marginBottom: '5%'
    }, touchable: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 2,
    }, infoContainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'center',
    },emergent: {
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 2,
    }
})
export {stylesDeliveryBox};
