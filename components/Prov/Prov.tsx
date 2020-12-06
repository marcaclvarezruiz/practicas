import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import ContentAccept from "../ContentAccept/ContentAccept";
import ContentProcess from "../ContentProcess/ContentProcess";
import {stylesProv} from "./StylesProv";

type MyProps = {}
type MyState = { componentController: boolean }

class Prov extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            componentController: true
        }
    }

    changeStateTrue() {
        this.setState({componentController: true});
    }

    changeStateFalse() {
        this.setState({componentController: false});
    }
    render() {
        let renderComponent;
        const componentController = this.state.componentController;

        if (componentController) {
            renderComponent = <ContentAccept/>
        } else {
            renderComponent = <ContentProcess/>
        }

        return (
            <View style={stylesProv.container}>
                <View style={stylesProv.buttonsContainer}>
                    <TouchableOpacity style={stylesProv.touchableText1} onPress={() => this.changeStateTrue()}>
                        <Text> Por Aceptar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProv.touchableText2} onPress={() => this.changeStateFalse()}>
                        <Text> En curso </Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesProv.contentContainer}>
                    {renderComponent}
                </View>
            </View>
        )
    }
}

export default Prov
