import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {stylesUserConfig} from './StylesUserConfig';
import {Icon} from 'react-native-elements';

interface Props {
    navigation: any
}

class UserConfig extends Component<Props> {
    render() {
        return (
            <View style={stylesUserConfig.container}>
                <View style={stylesUserConfig.headerCloseContainer}>
                    <Icon color={'white'} name='close' onPress={() => this.props.navigation.navigate('Main')}/>
                </View>
                <View style={stylesUserConfig.space}>

                </View>
                <View style={stylesUserConfig.imageContainer}>
                    <Image style={stylesUserConfig.imageUserBig} source={require('../../src/assets/test.png')}/>
                </View>
                <View style={stylesUserConfig.space}>

                </View>
                <View>
                    <Text style={stylesUserConfig.title}>Hola, La Casona</Text>
                    <Text style={stylesUserConfig.subtitle}>Editar perfil</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Método de pago</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Mis reservas</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Códigos promocionales</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Cómo funciona</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Ayuda</Text>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}>Contacto</Text>
                </View>
                <View style={stylesUserConfig.space}>

                </View>
                <View>
                    <Text style={[stylesUserConfig.content, stylesUserConfig.options]}> Cerrar sesión </Text>
                </View>
                <View style={stylesUserConfig.space}>

                </View>
            </View>
        )
    }
}

export default UserConfig;
