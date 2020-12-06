import React, {Component} from "react";
import {Text, View} from "react-native";
import {stylesContentProcess} from "./StylesContentProcess";

class ContentProcess extends Component {
    render() {
        return (
            <View style={stylesContentProcess.container}>
                <Text> Curso </Text>
            </View>
        )
    }
}

export default ContentProcess;
