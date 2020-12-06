import React, {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../MainScreen/MainScreen";
import UserConfig from "../UserConfig/UserConfig";

const Stack = createStackNavigator();

class MyStack extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={MainScreen} name='Main'/>
                <Stack.Screen component={UserConfig} name='Configuracion'/>
            </Stack.Navigator>
        )
    }
}

export default MyStack;
