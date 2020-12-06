import {Button, View} from "react-native";
import React, {Component} from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import {stylesHistorialScreen} from "./StylesHistorialScreen";

interface Props {
    navigation?: any;
}

class HistorialScreen extends Component<Props> {
    render() {
        let {navigation} = this.props.navigation;
        return (
            <View style={stylesHistorialScreen.container}>
                <View style={stylesHistorialScreen.containerHeaderBar}>
                    <HeaderBar navigation={this.props.navigation}/>
                </View>
                <View style={stylesHistorialScreen.containerContent}>
                    <Button title={'Abrir menu'} onPress={() => this.props.navigation.openDrawer()}/>
                </View>
            </View>
        )
    }
}

export default HistorialScreen
