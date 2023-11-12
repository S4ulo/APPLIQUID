import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import New from '../pages/New';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import ButtonNew from '../components/buttonNewPost';
import Login from '../pages/Login';
import Cadastro from '../pages/Login/Cadastro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ...

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: '#FFF',
    }}
  >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="newspaper" size={size} color={color} />;
            } else {
              return <Ionicons name="newspaper-outline" size={size} color={color} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="people" size={size} color={color} />;
            } else {
              return <Ionicons name="people-outline" size={size} color={color} />;
            }
          },
        }}
      />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused, size, color }) => {
          if (focused) {
            return <Ionicons name="person" size={size} color={color} />;
          } else {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
      }}
    />
  </Tab.Navigator>
);

 
const Routes = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default Routes;