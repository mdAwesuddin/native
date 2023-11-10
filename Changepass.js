import React,{useState} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    TextInput,
    Image,
    ScrollView
  } from "react-native";
  import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';

const Changepass = () => {
  const [cpass,setCpass]=useState("");
  const [npass,setNpass]=useState("");
  const [cupass,setCUpass]=useState("");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,margin:10};
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
  <PaperProvider>

    <View style={styles.container}>
      <Text style={styles.text} placeholder="Profile">
        Change Password
      </Text>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={styles.closebtn}>
        <TouchableOpacity style={styles.button2} onPress={hideModal}>
          <Text style={styles.text2} >&times;</Text>
        </TouchableOpacity>
        </View>
          <Text>Password Successfully Changed</Text>
        </Modal>
      </Portal>
      <TextInput style={styles.input} placeholder="Current Password" onChangeText={(text)=>setCpass(text)} />
      <TextInput style={styles.input} placeholder="New Password" onChangeText={(text)=>setNpass(text)} />
      <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={(text)=>setCUpass(text)} />

      <TouchableOpacity style={styles.button1} onPress={showModal}>
        <Text style={styles.text2}>Submit</Text>
      </TouchableOpacity>
    </View>
</PaperProvider>
      <StatusBar backgroundColor="#2580c7" barStyle="dark-content" />
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
  button2:{
    marginTop: 4,
    width: "10%",
    backgroundColor: "#2580c7",
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closebtn:{
    display:'flex',
      flexDirection:'row',
      justifyContent:'end',
      gap:50
  },
  text2: {
    color: "white",
    fontSize: 18,
  }
});
export default Changepass