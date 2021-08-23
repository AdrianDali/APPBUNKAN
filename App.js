//este es nuestro archivo principal de front

// importas la statusbar de el paquete expo-status-bar
import { StatusBar } from 'expo-status-bar';
// react es para que sepa que lenguaje estamos utilizando
import React from 'react';
//la etiqueta view es como div en html
//stylesheet es la hoja de estilos 
import { StyleSheet, Text, View } from 'react-native';

import ConfirmarNumero from './src/pantallas/cuenta/ConfirmarNumero';


import MiDatos from './src/pantallas/cuenta/MiDatos';


/* export default los componentes inican con letras mayusculas
, se le pone el mismo nombre de la clase o componente */
export default function App() {
  return ( 
    <View style = {styles.container }>
      <StatusBar />
      <MiDatos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
