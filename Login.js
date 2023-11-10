import React,{useState} from 'react'
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
import CheckBox from "react-native-check-box";
const Login = ({navigation}) => {
  const [mail,setMail]=useState("");
  const [pass,setPass]=useState("");
  // const [active,setActive]=useState(false);
  const userData = {
    name:mail, // You can include any data you want to pass
  };
  const handlesubmit=()=>{
    navigation.navigate("nav",{
      screen: 'Dashboard',
      params: { userData },    });
  }
  return (
    
    <SafeAreaView style={styles.area}>
      {/* {active? */}
    <ScrollView 
    contentContainerStyle={{ 
       flexGrow: 1, 
       flexDirection: 'column', 
       justifyContent: 'space-between'
     }}
     >

    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text} placeholder="Login">
          Log In
        </Text>

        <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>setMail(text)} />
        <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>setPass(text)} />
        <View style={styles.checkbox}>
          <CheckBox />
          <Text>Remember Me</Text>
        </View>

        <TouchableOpacity style={styles.button1} onPress={handlesubmit}>
          <Text style={styles.text2}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>Forgot Password ?</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text4}>Don't Have an Account?</Text>
        <Text style={styles.text5} onPress={()=>navigation.navigate("Signup")}>Sign In</Text>

        <StatusBar backgroundColor="#2580c7" barStyle="dark-content" />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    area:{
     flex:1
    //  backgroundColor:'white'
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 25,
      alignItems: "center",
      justifyContent: "center",
      // position:"fixed"
      // display:"sticky"
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
      width: "70%",
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
    footer: {
      backgroundColor:"white",
      alignItems: "center",
      paddingBottom: 20,
    }
  });

export default Login