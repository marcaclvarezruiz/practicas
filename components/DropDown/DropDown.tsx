import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {stylesDropDown} from "./StylesDropDown";

interface Props {
    orderType: String,
    code: number,
    id: number,
    drinks: any,
    intolerances: any
}

class DropDown extends Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <View>
                    <View>
                        <Text>CODE {this.props.code}</Text>
                        <Text>ID #{this.props.id} </Text>
                    </View>
                    <View>
                        <Text>Tipo de experiencia:<Text>{this.props.orderType}</Text></Text>
                        <TouchableOpacity>
                            <Text> VER MENU </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Bebidas: </Text>
                        <Text>Intolerancias: </Text>

                    </View>
                    <View>
                        <Text>{this.props.drinks} </Text>
                        <Text>{this.props.intolerances} </Text>

                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text> Aceptar </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default DropDown;