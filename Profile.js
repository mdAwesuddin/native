import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    Image,
    TextInput,
    ScrollView
  } from "react-native";
  import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';

const Profile = () => {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [mail,setMail]=useState("");
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <SafeAreaView style={styles.area}>
    {/* {active? */}
    
  <View style={{ flex: 1 }}>
  <PaperProvider>
    <View style={styles.container}>
      <Text style={styles.text} placeholder="Profile">
        Profile
      </Text>
      
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Success</Text>
        </Modal>
      </Portal>
      {/* <Button style={{marginTop: 30}} >
        Show
      </Button> */}
      <TextInput style={styles.input} placeholder="Firstname" onChangeText={(text)=>setFname(text)} />
      <TextInput style={styles.input} placeholder="Lastname" onChangeText={(text)=>setLname(text)} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>setMail(text)} />

      <TouchableOpacity style={styles.button1} onPress={showModal} >
        <Text style={styles.text2}>Update</Text>
      </TouchableOpacity>
    </View>
    </PaperProvider>
      <StatusBar backgroundColor="#2580c7" barStyle="dark-content" />
      
  </View>
  

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
  }
});
export default Profile