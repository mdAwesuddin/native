import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
const Drawer = createDrawerNavigator();
import Profile from './Profile';
import Changepass from './Changepass';

const Drawernav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
      <Drawer.Screen name="Profile" component={Profile}/>
      <Drawer.Screen name="Change Password" component={Changepass}/>
    </Drawer.Navigator>
  )
}

export default Drawernav