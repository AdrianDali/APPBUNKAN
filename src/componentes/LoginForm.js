import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {Icon,Input,Button,Divider} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { validateEmail } from '../utils/ValidarEmail'

export default function LoginForm() {

    //use state es como get y set al mismo tiempo
    const [email,setemail] = useState("");
    const [password, setpassword] = useState("");

    return (
        <View style= {styles.container}>
            <View style={{borderBottonColor: "#25d366",
            borderBottonWidth:2,width:50}}/>
            <Input placeholder="correo" containerStyle={styles.input} 
            rightIcon={{
                type: "material-community",
                name:"eye-outline",
                color: "#128c7e",
                onPress: () => alert("hola!")
            }}
            leftIcon={{
                type: "material-community",
                name: "account-circle",
                color:"#128c7e"
            }}/>
            <Input placeholder="contrasena"   containerStyle={styles.input}
            rightIcon={{
                type: "material-community",
                name:"eye-outline",
                color: "#128c7e",
                onPress: () => alert("hola!")
            }}
            leftIcon={{
                type: "material-community",
                name: "lock",
                color:"#128c7e"
            }}/>
            <Button title="Entrar" containerStyle={styles.btnentrar} buttonStyle={{backgroundColor:"#25d366" }}/>

            <Text style={{marginTop: 10}}>
                no tienes cuenta?
                <Text style={styles.cuenta}>
                    {" "} Crear Cuenta
                </Text>
            </Text>
        <Divider style={{backgroundColor:"#128c7e", height:1,width:"90%" ,marginTop: 20}}/>
        <Text styles={styles.text}>
            O
        </Text>

        <View style={styles.btnLogin}>
            <TouchableOpacity styles ={styles.btnLoginsocial}>
                <Icon size ={24} type ="material-community" name= "google" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "facebook" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "youtube" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity><TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "twitch" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "twitter" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity><TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "whatsapp" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity><TouchableOpacity>
                <Icon size ={24} type ="material-community" name= "linkedin" color = "#128c7e" backgroundColor= "transparent"/>
               
            </TouchableOpacity>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:"#fff",
    flex:1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    alignItems:"center",
    paddingTop:20,
},
input :{
    width: "90%",
    marginTop:20,
    height:50
    
},
btnentrar:{
    width: "50%",
    marginTop: 20
},
txtcrearcuenta:{
    fontSize: 15
},
cuenta:{
    color: "#128c7e",
    fontFamily : "Roboto",
    fontSize: 15
},
text:{
    fontWeight:"bold",
    fontSize:20,
    marginTop: 20,
    color: "#128c7e"
},
btnLogin: {
    flexDirection: "row", // pone los elementos en fila 
    justifyContent:"space-around"
},
btnLoginsocial:{
    backgroundColor:"#127c7e"
    
}
})