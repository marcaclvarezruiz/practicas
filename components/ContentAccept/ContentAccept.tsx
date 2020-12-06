import React, {Component} from "react";
import { View} from "react-native";
import DeliveryBox from "../DeliveryBox/DeliveryBox";
import EmptyOrder from "../EmptyOrder";
import ConsumePlaceDelivery from "../ConsumPlaceContainer/ConsumePlaceDelivery";
import ConsumePlaceRestaurant from "../ConsumPlaceContainer/ConsumePlaceRestaurant";
import {stylesContentAccept} from "./StylesContentAccept";
import axios from 'axios'

class ContentAccept extends Component{
    constructor(props: any) {
        super(props);
        this.state = {
            initialArray: []
        }
    }
    getDelivery() {
        let arrayObject = [
            {
                orderType: '#HAPPY',
                numCustomers: 12,
                remainingSeconds: 0,
                remainingMinutes: 19,
                code: 563,
                id: 45468,
                drinks: ['1 coca cola', '1 Agua Mineral'],
                intolerances: ['2 crustaceos', '1 gluten'],
                place: 'Delivery'

            },{
                orderType: '#HAPPY',
                numCustomers: 12,
                remainingSeconds: 0,
                remainingMinutes: 5,
                code: 569,
                id: 45474,
                drinks: ['1 coca cola', '1 Agua Mineral'],
                intolerances: ['2 crustaceos', '1 gluten'],
                place: 'Delivery'

            },{
                orderType: '#CLASSIC',
                numCustomers: 6,
                remainingSeconds: 0,
                remainingMinutes: 18,
                code: 564,
                id: 45469,
                drinks: ['2 coca cola', '5 Agua Mineral'],
                intolerances: ['1 crustaceos', '1 gluten'],
                place: 'Restaurante'

            },{
                orderType: '#WOW',
                numCustomers: 2,
                remainingSeconds: 0,
                remainingMinutes: 5,
                code: 565,
                id: 45470,
                drinks: ['2 coca cola', '5 Agua Mineral'],
                intolerances: ['1 crustaceos', '1 gluten'],
                place: 'Restaurante'

            },{
                orderType: '#WOW',
                numCustomers: 8,
                remainingSeconds: 0,
                remainingMinutes: 15,
                code: 566,
                id: 45471,
                drinks: ['2 coca cola', '5 Agua Mineral'],
                intolerances: ['1 crustaceos', '1 gluten'],
                place: 'DELIVERY'

            },{
                orderType: '#HAPPY',
                numCustomers: 2,
                remainingSeconds: 0,
                remainingMinutes: 10,
                code: 567,
                id: 45472,
                drinks: ['2 coca cola', '5 Agua Mineral'],
                intolerances: ['1 crustaceos', '1 gluten'],
                place: 'Restaurante'

            },{
                orderType: '#CLASSIC',
                numCustomers: 2,
                remainingSeconds: 0,
                remainingMinutes: 15,
                code: 568,
                id: 45473,
                drinks: ['2 coca cola', '5 Agua Mineral'],
                intolerances: ['1 crustaceos', '1 gluten'],
                place: 'Delivery'

            }
        ];
        return arrayObject;
    }

    componentDidMount() {
        setInterval(() => axios.get('staging.admin.eatkube.com/restaurants/orders').then(res => {
        }).catch(e => {
            let randomNumber = Math.round(Math.random());
            if (randomNumber == 1) {
                let initialArr = this.getDelivery();
                this.setState({initialArray:initialArr})

            } else {
                let initialArr = [];
                this.setState({initialArray:initialArr});
            }
        }), 5000)
    }
    render() {
        let boxesListArray = this.state.initialArray.map(array => (
                <DeliveryBox key={array.id}
                             orderType={array.orderType}
                             numCustomers={array.numCustomers}
                             remainingSeconds={array.remainingSeconds}
                             remainingMinutes={array.remainingMinutes}
                             code={array.code}
                             id={array.id}
                             drinks={array.drinks}
                             intolerances={array.intolerances}
                             place={array.place}
                />
            )
        );

         let renderComponent;
         let renderComponent2;

         let lista = this.state.initialArray

        if (lista.length==0) {
             renderComponent = <EmptyOrder/>
        } else {
             renderComponent = <ConsumePlaceDelivery boxes={boxesListArray}/>
             renderComponent2 = <ConsumePlaceRestaurant boxes={boxesListArray}/>
        }
        return (
            <View style={stylesContentAccept.container}>
                {renderComponent}
                {renderComponent2}
            </View>
        )
    }
}

export default ContentAccept;
