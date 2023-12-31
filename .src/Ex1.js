import React from "react";
import {View, Text} from 'react-native'
import { StyleSheet } from "react-native";

const Ex1 = ()=>{
    return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>
                Hello, World!
            </Text>
        </View>
    </View>     
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        height:200,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#40E0D0',
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
    }
})
export default Ex1