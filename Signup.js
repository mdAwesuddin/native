import React from 'react'
// import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StatusBar,
    ScrollView
  } from "react-native";

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.area}>
          <ScrollView contentContainerStyle={{ 
            flexGrow: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-between'
           }}>

    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text} placeholder="Email">
           Sign up
        </Text>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.text2} onPress={()=>navigation.navigate("Login")}>Sign up</Text>
        </TouchableOpacity >
        <Text style={{ marginTop:10 }}>Or</Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text4}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.footer}>
        <Text style={styles.text4}>Already Have an Account?</Text>
        <Text style={styles.text5} onPress={()=>navigation.navigate("Login")}>Log In</Text>

        <StatusBar backgroundColor="#2580c7" barStyle="dark-content" />
      </View>
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    area:{
     flex:1,
    //  backgroundColor:'white'
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 25,
      alignItems: "center",
      justifyContent: "center",
      // paddingHorizontal:20
    },
    text: {
      fontWeight: "bold",
      fontSize: 30,
      paddingBottom: 20,
    },
    input: {
      width: "70%",
      height: 40,
      borderWidth: 1,
      borderColor: "#0000FF",
      borderRadius: 10,
      padding: 10,
      margin: 10,
    },
    button1: {
      marginTop: 20,
      width: "70%",
      backgroundColor: "#2580c7",
      borderWidth: 1,
      borderRadius: 10,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    text2: {
      color: "white",
      fontSize: 18,
    },
    checkbox: {
      border: 2,
      borderColor: "#000FFF",
      flexDirection: "row",
      // alignItems: "flex-start",
      // justifyContent: "center",
      width: "60%",
    },
    box: {
      marginRight: 5,
    },
    text3: {
      color: "#2580c7",
      marginLeft: "30%",
      marginTop: 10,
    },
    text4: {
      fontWeight: "bold",
    },
    text5: {
      color: "#2580c7",
      marginTop: 10,
    },
    button2:{
        marginTop: 20,
        width: "70%",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderColor:"#0000FF",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
      backgroundColor:"white",
      alignItems: "center",
      paddingBottom: 20,
    },
  });
export default Signup