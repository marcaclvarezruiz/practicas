import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native'
import {stylesHeaderBar} from './StylesHeaderBar';
import {Icon} from 'react-native-elements';

interface Props {
    navigation: any
}

class HeaderBar extends Component<Props> {
    render() {
        let navigation = this.props.navigation;
        return (
            <View style={stylesHeaderBar.header}>
                <View style={stylesHeaderBar.menuIconContainer}>
                    <Icon color={'rgb(245,95,75)'} name='menu'/>
                </View>
                <View style={stylesHeaderBar.titleAndLogoContainer}>
                    <Image source={require('../../src/assets/icon.png')} style={stylesHeaderBar.image}/>
                    <Text> EatKube </Text>
                </View>
                <View style={stylesHeaderBar.profilePicContainer}>
                    <TouchableHighlight style={stylesHeaderBar.profileImageContainer}
                                        onPress={() => navigation.navigate('Configuracion')}>
                        <Image source={require('../../src/assets/test.png')} style={stylesHeaderBar.imageUser}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default HeaderBar;
