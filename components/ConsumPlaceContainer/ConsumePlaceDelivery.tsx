import React, {Component} from "react";
import {Text, View} from "react-native";
import {stylesConsumePlaceDelivery} from "./StylesConsumePlaceDelivery";

interface Props {
    boxes: any
}

class ConsumePlaceDelivery extends Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let boxes = this.props.boxes;
        let boxesDelivery = [];
        for (let i=0; i<boxes.length; i++) {
            if (boxes[i].props.place == 'Delivery') {
                boxesDelivery.push(boxes[i])
            }
        }

        boxesDelivery.sort(function (a, b) {
            return (a.props.remainingMinutes - b.props.remainingMinutes)
        })

        return (
            <View style={stylesConsumePlaceDelivery.container}>
                <Text>Delivery</Text>
                {boxesDelivery}
            </View>
        )
    }
}

export default ConsumePlaceDelivery