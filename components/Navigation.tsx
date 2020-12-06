import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainScreen from "./MainScreen/MainScreen";
import HistorialScreen from "./HistorialScreen/HistorialScreen";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Pedidos' component={MainScreen}/>
            <Stack.Screen name='Historial' component={HistorialScreen}/>

        </Stack.Navigator>
    )
}

export default Navigation;
