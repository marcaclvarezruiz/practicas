import React, {Component} from "react";
import {View, Text} from "react-native";
import {stylesMainScreen} from "./StylesMainScreen";
import HeaderBar from "../HeaderBar/HeaderBar";
import Prov from "../Prov/Prov";

interface Props {
    navigation: any
}

class MainScreen extends Component<Props> {
    render() {
        return (
            <View style={stylesMainScreen.container}>
                <View style={stylesMainScreen.containerHeaderBar}>
                    <HeaderBar navigation={this.props.navigation}/>
                </View>
                <View style={stylesMainScreen.containerTitle}>
                    <Text> Acepta más {'\n'} pedidos en menos tiempo </Text>
                </View>
                <View style={stylesMainScreen.containerProvider}>
                    <Prov/>
                </View>
            </View>
        )
    }
}

export default MainScreen
