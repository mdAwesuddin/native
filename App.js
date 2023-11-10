import Login from "./Login";
import Signup from "./Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack=createNativeStackNavigator();
import Drawernav from "./Drawernav";
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerStyle:{
          backgroundColor:"#2580c7",
        }
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup}/>
      {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/> */}
      <Stack.Screen name="nav" component={Drawernav} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
      );
}

