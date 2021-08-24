
/** va a tener, login, registro, cambio de contrasena
 * aqui vamos a crear la navegacion principal y esta devuelve 
 * la navegacion cuando el usuario no esta registrado
 */
import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

//con esa libreri dices que el componente tendra la navegacion principal
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "../pantallas/cuenta/Login";

import { Registrar } from "../pantallas/cuenta/Registrar";

import { RetauraPassword } from "../pantallas/cuenta/RestaurarPassword";

const Stack = createStackNavigator();

//INITIAL ROUTER NAME TE DICE QUE COMPONENTE SACATA AL PRINCIPIO
// header shown hace que no se muestre la cabecera, no se generara automaticamente

export default function RutasNoAutenticadas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
                <Stack.Screen component={Login} name ="login"/>
                <Stack.Screen component={{Registrar}} name ="registrar"/>
                <Stack.Screen component={RetauraPassword} name ="lostPassword"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
