import {StyleSheet} from 'react-native';

const stylesDropDown = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    }, firstRow: {
        flexDirection: 'column',
    },secondRow: {
        flexDirection: 'column',
    },thirdRow: {
        alignItems: 'center',
    }, acceptButton: {
        borderRadius: 15,
        backgroundColor: 'rgb(245,85,75)',
        width: '60%',
        textAlign: 'center'
    }, showMenuButton: {
        borderRadius: 15,
        backgroundColor: 'rgb(245,85,75)',
        textAlign: 'center',
    },infoId: {
        flexDirection: 'row'
    }, subtitle: {
        flexDirection: 'row',
    }, intol: {
        flexDirection: 'row'
    }, menuButtonContainer: {
        flexDirection: 'row'
    }, textOrange: {
        color: 'rgb(245,85,75)'
    }, textBold: {
        fontWeight: 'bold'
    }
})
export {stylesDropDown};
