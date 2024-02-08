import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Colors from '../Utils/Colors';
import MyStudyScreen from '../Screens/MyStudyScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab =createBottomTabNavigator();
export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.PRIMARY}}>
        <Tab.Screen name="Home" component = {HomeScreen}
        options={{
          tabBarIcon:({color, size}) => (<Ionicons name="home" size={24} color={color} />

          )
        }} />
        <Tab.Screen name="Studies" component = {MyStudyScreen} 
        options={{
          tabBarIcon:({color, size}) => (<Ionicons name="book" size={24} color={color}  />

          )
        }}/>
        <Tab.Screen name="Profile" component = {ProfileScreen} 
        options={{
          tabBarIcon:({color, size}) => (<Ionicons name="person" size={24} color={color}  />

          )
        }}/>

      </Tab.Navigator>
  )
}