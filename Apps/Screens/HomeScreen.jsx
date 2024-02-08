import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { client } from '../Utils/KindConfig'
import { AuthContext } from '../../App'; // Adjust the import path based on the location of AuthContext
import Header from '../Components/Header';
import ExtraButtons from '../Components/ExtraButtons';

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext)
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false)
        // User was logged out
    }
  };

  return (
    <>
    <View style={{padding:20, marginTop:25}}>
      <Header/>
      
    </View>
    <View style={{padding:20, marginTop:600}}>
    <ExtraButtons/>
    </View>
    </>
  )
}
