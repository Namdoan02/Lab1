import React from "react";
import {View, TouchableOpacity, Button, Text,StyleSheet} from 'react-native'

const Ex2 = ()=>{
    return (
        <View style={Mystyles.container}>
        <Button title="Button 1"onPress={()=>alert("hello 1")}/>
        <TouchableOpacity style={Mystyles.button} onPress={()=>alert("hello 2")}>
            <Text style={Mystyles.text}>
                Button 2
            </Text>
        </TouchableOpacity>
    </View>
    );
}
const Mystyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    button:{
        backgroundColor:'#blue',
        marginTop:10,
        alignItems:"center",
        padding:10
    },
    text:{
        color:"white",
        fontSize:18,
    }
})
export default Ex2