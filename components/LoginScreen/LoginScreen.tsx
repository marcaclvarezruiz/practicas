import React, {Component} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {stylesLoginScreen} from './StylesLoginScreen'

class LoginScreen extends Component {
    render() {
        return (
            <View style={stylesLoginScreen.container}>
                <View style={stylesLoginScreen.spaces}>
                </View>

                <View style={stylesLoginScreen.titleContainer}>
                    <Text style={stylesLoginScreen.title}> Eatkube Restaurantes</Text>
                </View>

                <View style={stylesLoginScreen.spaces}>
                </View>

                <View style={stylesLoginScreen.imageContainer}>
                    <Image style={stylesLoginScreen.image} source={require('../../src/assets/icon.png')}>
                    </Image>
                </View>

                <View style={stylesLoginScreen.spaces}>
                </View>

                <View style={stylesLoginScreen.registerContainer}>
                    <View style={stylesLoginScreen.registerForm}>
                        <TextInput style={stylesLoginScreen.inputField} placeholder={'Usuario'}/>
                        <TextInput style={stylesLoginScreen.inputField} placeholder={'Contraseña'}
                                   secureTextEntry={true}/>
                        <TouchableOpacity style={stylesLoginScreen.buttonContainer}>
                            <View style={stylesLoginScreen.button}>
                                <Text>Entrar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={stylesLoginScreen.spaces}>
                </View>
            </View>
        )
    }
}

export default LoginScreen
