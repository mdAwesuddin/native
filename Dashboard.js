import React,{useState,useEffect} from 'react'
// import { StatusBar } from "expo-status-bar";
import { SearchBar } from '@rneui/themed/dist';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    Image,
    ScrollView
  } from "react-native";
  import Icon from 'react-native-vector-icons/Ionicons'; 
  import { Modal,Portal,Button,PaperProvider,Card,TextInput } from 'react-native-paper';
  import * as imagepicker from 'expo-image-picker';

  const Dashboard = ({navigation,route}) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [haspermission,setHasPermission]=useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [formData, setFormData] = useState({
    id:Math.random(),
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const userdata=route.params?.userData;

  useEffect(()=>{
    (async ()=>{
      const gallerystatus=await imagepicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(gallerystatus.status==='granted');
    })();
  },[]);

  const pickimage=async ()=>{
    let result=await imagepicker.launchImageLibraryAsync({
      mediaTypes:imagepicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    });
    // console.log(result);
    if(!result.canceled){
      setFormData({...formData,image:result.uri})
    }
  };
  console.log(formData.image);
  if(haspermission===false){
    return <Text>No access</Text>
  }

  const handlesubmit = async() => {
    if (editMode) {
      const updatedUsers = [...users];
      updatedUsers[selectedUserIndex] = { ...formData };
      setUsers(updatedUsers);

    }else{
    setUsers([...users, { ...formData }]);
    console.log(users)
    
    }
    clearForm();
  }

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      image: '',
    });
    setEditMode(false);
    setSelectedUserIndex(null);
    hideModal();
  }

  const editUser = (index) => {
    showModal();
    setEditMode(true);
    setSelectedUserIndex(index);
    const selectedUser = users[index];
    setFormData({ ...selectedUser });
  }

  const deleteuser=(id)=>{
    const updatedCards = users.filter(card => card.id !== id);
    setUsers(updatedCards);
  }
  
  const filteredUsers = searchQuery
    ? users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery) ||
          user.lastName.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery) 
          ||
          user.phoneNumber.toString().toLowerCase().includes(searchQuery)
      )
    : users;

    const renderUserRows = () => {
      if (searchQuery && filteredUsers.length === 0) {
        return (
          <Text style={{textAlign:'center'}}>No Matches found for {searchQuery}</Text>
        );
      } 
      return filteredUsers.map((user,index) => (
      <Card key={user.id} style={{padding:10,margin:15,height:200}}>
      <View style={{display:"flex", flexDirection:"row",gap:45}}>
   
    <Card.Content style={{paddingTop:5,gap:15}}>
    <Text variant="titleLarge">{user.firstName}</Text>
      <Text variant="bodyMedium">{user.lastName}</Text>
      <Text variant="titleLarge">{user.email}</Text>
      <Text variant="bodyMedium">{user.phoneNumber}</Text>
    </Card.Content>
    
    <Card.Cover style={styles.cardimg} source={{ uri: `${user.image}` }} />
    </View>   
    <Card.Actions >
      <Button onPress={() => editUser(index,user._id)}>Edit</Button>
      <Button onPress={() => deleteuser(user.id)} style={{backgroundColor:"red"}}>Delete</Button>
    </Card.Actions>
  </Card>     
   
  ));
      };
  return (
    
    <SafeAreaView style={styles.area}>
   {/* <ScrollView > */}
   <View>
        <View style={styles.nav}>
        <Icon name="menu" style={{color:"white"}} size={30} onPress={()=>navigation.openDrawer()}></Icon>
            <Text style={styles.navtext}>Dashboard</Text>
        </View>
        <View style={styles.navbcontent}>
    <SearchBar
      platform="android"
      containerStyle={{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 0,
        height:50,
        width:'90%'
      }}
      inputContainerStyle={{ padding: 0,height:29 }}
      inputStyle={{ color: "black", padding: 0 }}
      onChangeText={(text)=>setSearchQuery(text.toLowerCase())}
      onClearText={() => console.log(onClearText())}
      placeholder="Search..."
      placeholderTextColor="black"
      round
      showCancel
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={()=>{}}
      value={searchQuery}
    />
     <TouchableOpacity style={styles.button1} onPress={showModal}>
          <Text style={styles.text2} >Add User</Text>
        </TouchableOpacity>
 </View>
  <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:"10%"}}>
 <Text style={{color:"black"}}>Hello {userdata.name}</Text>
 </View>
<PaperProvider  >
      <Portal >
        <Modal visible={visible} onDismiss={hideModal}  theme={{colors: {backdrop: 'transparent'}}} style={{marginTop:"55%"}} >
        <View style={styles.modal} >
        
        <View style={{padding:10,width:"85%",marginTop:50,marginLeft:20,display:"flex",alignItems:"center",justifyContent:"center"}}>
         <TextInput mode="outlined" style={{width:"85%"}} label="First Name" value={formData.firstName} onChangeText={(text)=>setFormData({...formData,firstName:text})} />        
         <TextInput mode="outlined" style={{marginTop:10,width:"85%"}} label="Last Name" value={formData.lastName} onChangeText={(text)=>setFormData({...formData,lastName:text})} />
         <TextInput mode="outlined" style={{marginTop:10,width:"85%"}} label="Email" value={formData.email} onChangeText={(text)=>setFormData({...formData,email:text})}/>
         <TextInput mode="outlined" style={{marginTop:10,width:"85%"}} label="Phone Number" value={formData.phoneNumber} onChangeText={(text)=>setFormData({...formData,phoneNumber:text})}/>
         <Image
        style={styles.tinyLogo}
        source={{
          uri: `${formData.image}`,
        }}
        alt={'Image preview'}
      />
        <Button onPress={()=>pickimage()} >upload</Button>
        {editMode ? (
         <TouchableOpacity style={styles.button1}>
          <Text style={styles.text2} onPress={handlesubmit} >Update</Text>
        </TouchableOpacity>) : (
           <TouchableOpacity style={styles.button1}>
           <Text style={styles.text2} onPress={handlesubmit} >Add User</Text>
         </TouchableOpacity> )}   
         </View>
         <TouchableOpacity style={styles.button2} onPress={hideModal}>
          <Text style={styles.text2} >&times;</Text>
        </TouchableOpacity>
       
        </View>
        </Modal>
      </Portal>
      {renderUserRows()}

   
  </PaperProvider>
    {/* backgroundColor="white" barStyle="dark-content" */}
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        </View>
        {/* </ScrollView> */}
     </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
    area:{
     flex:1,
    },
    nav:{
        flexDirection:"row",
        backgroundColor:"black",
        height:70,
        justifyContent:'start',
        gap:9,
        alignItems:'center',
        padding:20,
    },
    navtext:{
        color:'white',
        fontWeight: "bold",
        fontSize: 18,
       
    },
    navbcontent:{
      width:"55%",
      padding:5,
      // flex:1,
      flexDirection:"row",
      justifyContent:'space-between',
     gap:70
    },
    button1: {
      marginTop: 4,
      width: "60%",
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
    text2: {
      color: "white",
      fontSize: 18,
    },
    cardimg:{
      width:130,
      height:130
    },
    modal:{

      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      height: 550, // You can adjust the height as per your requirements
      backgroundColor: 'white',
      padding: 10,
      margin:10
    },
    tinyLogo: {
      marginTop:5,
      width: 100,
      height: 100,
    },
    docbtn:{
      backgroundColor:"gray",
      color:"white",
      margin:10,
      padding:7
    }
    
})

export default Dashboard