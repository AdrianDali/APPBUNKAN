import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator, HeaderStyleInterpolators} from '@react-navigation/stack'
import ConfirmarNumero from '../pantallas/cuenta/ConfirmarNumero'
import EnviarConfirmacion from '../pantallas/cuenta/EnviarConfirmacion'


// mavigator es la clase que te permite moverte entre ventanas

const Stack = createStackNavigator();



export default function Cuenta() {
    return (
       <Stack.Navigator>
           <Stack.Screen component={EnviarConfirmacion} name ="enviar-confirmacion"
            options = {{title:"Confirmar tu numero de telefono" ,headerStyle : {backgroundColor: "#127c7e"},headerTintColor:"#fff"}}/>
            <Stack.Screen component={ConfirmarNumero} name ="confirmar-movil"
            options = {{title:"Confirmar tu numero" ,headerStyle : {backgroundColor: "#127c7e"},headerTintColor:"#fff"}}/>
      
       </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})
