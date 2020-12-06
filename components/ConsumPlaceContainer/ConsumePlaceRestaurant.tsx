import React, {Component} from "react";
import {Text, View} from "react-native";
import {stylesConsumePlaceRestaurant} from "./StylesConsumePlaceRestaurant";

interface Props {
    boxes: any
}

class ConsumePlaceRestaurant extends Component<Props> {
    constructor(props: any) {
        super(props);
    }
    render() {
        let boxesRestaurant = [];
        let boxes = this.props.boxes;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].props.place == 'Restaurante') {
                boxesRestaurant.push(boxes[i])
            }
        }

        boxesRestaurant.sort(function (a, b) {
            return (a.props.remainingMinutes - b.props.remainingMinutes)
        })
        return (
            <View style={stylesConsumePlaceRestaurant.container}>
                <Text>Restaurante</Text>
                {boxesRestaurant}
            </View>
        )
    }
}

export default ConsumePlaceRestaurant