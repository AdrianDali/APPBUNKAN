import React,{useRef} from 'react'

import LoginForm from '../../componentes/LoginForm'
import { useNavigation } from "@react-navigation/core";
import Toast from 'react-native-easy-toast';
import { LogBox,StyleSheet,View,StatusBar,Image,Text } from 'react-native';

//formularion react native

export default function Login() {

    const toastRef = useRef();

    return (
        <View style={ styles.container}> 
            <StatusBar backgroundColor = "#128c7e"/>
            <Image source={require('../../../assets/logo23.png')} style={styles.imgLogo} />
            <Text style={styles.textobanner}>¡Bienvenido!</Text>
            <LoginForm toastRef = {toastRef}/>
            <Toast ref={toastRef} position = "center" opacity={0.9} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#128c7e"
    },
    imgLogo:{
        width :106,
        height:106,
        marginTop:40,
        alignSelf:"center"  // align self centra todo
    },
    textobanner:{
        fontFamily:"Roboto",  // no es compatible con ios
        fontWeight:"bold",
        fontSize: 30,
        color: "#fff",
        alignSelf: 'center',
    } 
})