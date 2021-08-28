// contrasena para push en git
// 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


//este es nuestro archivo principal de front

// importas la statusbar de el paquete expo-status-bar
import { StatusBar } from 'expo-status-bar';
// react es para que sepa que lenguaje estamos utilizando
import React from 'react';
//la etiqueta view es como div en html
//stylesheet es la hoja de estilos 


import ConfirmarNumero from './src/pantallas/cuenta/ConfirmarNumero';

import TiendaStack  from './src/navegacion/TiendaStack';

import MiDatos from './src/pantallas/cuenta/MiDatos';

import  RutasAutenticadas  from "./src/navegacion/RutasAutenticadas";

import  RutasNoAutenticadas  from "./src/navegacion/RutasNoAutenticadas";

//<RutasAutenticadas/>

/* export default los componentes inican con letras mayusculas
, se le pone el mismo nombre de la clase o componente */
export default function App() {
  return ( 
    <RutasNoAutenticadas/>
  );
}

