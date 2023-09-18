import React, { useState } from "react";
import { View, TextInput, StyleSheet,Button,Text } from "react-native"


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontsize:18,
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 10,
        borderRadius: 5,
    },
});

export default ()=>{
    const[name, setName]=useState("");
    return(
        <View style = {styles.container}>
            <Text styles={styles.label}>What is your name?</Text>
            <TextInput 
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="rgba(0,0,0,0.5)"
            onchangeText={(text)=>setName(text)}
            value ={name}/>
            <Button title ="Say Hello"
            onPress={()=>{
                alert(`Hello, ${name}!`);
                setName("");
            }}
            />
        </View>
    );
};