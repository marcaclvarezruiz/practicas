import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import DropDown from "../DropDown/DropDown";
import {stylesDeliveryBox} from "./StylesDeliveryBox";

interface Props {
    orderType: String,
    numCustomers: number,
    remainingSeconds: number,
    remainingMinutes: number,
    code: number,
    id: number,
    drinks: any,
    intolerances: any,
    place: string
}

interface State {
    componentController: boolean
    remainingSeconds: number
    remainingMinutes: number
}

class DeliveryBox extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            componentController: false,
            remainingSeconds: this.props.remainingSeconds,
            remainingMinutes: this.props.remainingMinutes
        }
    }

    decrementClock = () => {
        if (this.state.remainingSeconds==0) {
            this.setState((prevstate) => ({remainingMinutes: prevstate.remainingMinutes - 1}));
            this.setState({remainingSeconds: 59})
        }
        this.setState((prevstate) => ({remainingSeconds: prevstate.remainingSeconds - 1}));
    };

    componentDidMount() {
        setInterval(() => {
            this.decrementClock();
        }, 1000);
    }

    changeState() {
        if (this.state.componentController) {
            this.setState({componentController: false})
        } else {
            this.setState({componentController: true})
        }
    }

    render() {
        //Guardo las props en variables para pasarselas al dropDown
        let orderType = this.props.orderType;
        let id = this.props.id;
        let code = this.props.code
        let drinks = this.props.drinks;
        let intolerances = this.props.intolerances;


        let renderComponent;
        let componentController = this.state.componentController;

        if (componentController) {
            renderComponent =
                <DropDown orderType={orderType}
                          code={code}
                          id={id}
                          drinks={drinks}
                          intolerances={intolerances}>

                </DropDown>
        }
        return (
            <View style={stylesDeliveryBox.container}>
                <TouchableOpacity onPress={() => this.changeState()}
                                  style={stylesDeliveryBox.touchable}>
                    <View style={stylesDeliveryBox.infoContainer}>
                        <Text style={{marginLeft: '5%'}}>{this.props.orderType}</Text>
                    </View>
                    <View style={[stylesDeliveryBox.infoContainer, {justifyContent: 'center'}]}>
                        <Text>{this.props.numCustomers + ' personas'}</Text>
                    </View>
                    <View style={[stylesDeliveryBox.infoContainer, {justifyContent: 'center'}]}>
                        {<Text style={{marginLeft: '5%'}}>{this.state.remainingMinutes}:{this.state.remainingSeconds}</Text>}
                        <Icon name={'eject'}/>
                    </View>
                </TouchableOpacity>
                <View style={stylesDeliveryBox.emergent}>
                    {renderComponent}
                </View>
            </View>
        )
    }
}

export default DeliveryBox;
