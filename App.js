import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { createContext, useEffect, useState } from 'react';
import { client } from './Apps/Utils/KindConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';

// Create a context for managing authentication state
export const AuthContext= createContext();
export default function App() {

  // State to manage authentication status
  const [auth, setAuth] = useState(false);

  // Effect to check authentication status on mount and when auth changes
  useEffect(() => {
    checkAuthenticate();
}, [auth]);

  // Function to check authentication status
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      setAuth(true)

        // Need to implement, e.g: call an api, etc...
    } else {
      setAuth(false)
      return 
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};


  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{auth, setAuth}}>
      <NavigationContainer>
        {auth? <TabNavigation/>:<LoginScreen/>}
      </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
