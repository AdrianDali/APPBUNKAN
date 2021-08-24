import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
//TouchableHighLight es como un boton que cambia de un color a otro
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//para que se diroja a la panatlla de tienda cuando el uusairo oprima el boton


export default function ShopBotton() {

    const navigation = useNavigation();
//el nombre del navigate igual al stack de rutas autenticadas
    return (
       <TouchableHighlight style={styles.container}
       onPress={()=> { navigation.navigate("mitienda")}}
       > 
           <Icon name="store" color="#fff" size={30}/>
       </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
 container:{

     backgroundColor:"#25d366", // es para poner un color de fondo 
     alignItems:"center",  // es para alinear todos los elementos al centro
     justifyContent:"center", // es para alinear todo al centro
     width: 72,
     height:72,
     borderRadius: 36,
     top:-20, //para que suba
     shadowRadius:5,
    // Offset:{height:10},
     shadowOpacity:0.3,
    borderWidth: 3, // el ancho del borde
    borderColor:"#fff", // es el color del border
    padding:20 //da mas espacio para que el usario orpima el boton

 }

})