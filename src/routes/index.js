import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from '../pages/Home'
import Inbox from '../pages/Inbox'
import New from '../pages/New'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import ButtonNew from '../components/buttonNewPost'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0
        },
        tabBarActiveTintColor: "#FFF"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="newspaper" size={size} color={color} />
            } else {
              return <Ionicons name="newspaper-outline" size={size} color={color} />
            }
          }
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="people" size={size} color={color} />
            } else {
              return <Ionicons name="people-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />
            } else {
              return <Ionicons name="person-outline" size={size} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator >
  )
}




/*import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import Home from './src/pages/Home';
import Inbox from './src/pages/Inbox';
import New from './src/pages/New';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';
import ButtonNew from './src/components/buttonNewPost';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? (
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
                  return <Ionicons name="home" size={size} color={color} />
                } else {
                  return <Ionicons name="home-outline" size={size} color={color} />
                }
              }
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ focused, size, color }) => {
                if (focused) {
                  return <Ionicons name="newspaper" size={size} color={color} />
                } else {
                  return <Ionicons name="newspaper-outline" size={size} color={color} />
                }
              }
            }}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={{
              tabBarIcon: ({ size }) => {
                return <ButtonNew size={size} />
              }
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={Inbox}
            options={{
              tabBarIcon: ({ focused, size, color }) => {
                if (focused) {
                  return <Ionicons name="people" size={size} color={color} />
                } else {
                  return <Ionicons name="people-outline" size={size} color={color} />
                }
              }
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused, size, color }) => {
                if (focused) {
                  return <Ionicons name="person" size={size} color={color} />
                } else {
                  return <Ionicons name="person-outline" size={size} color={color} />
                }
              }
            }}
          />
        </Tab.Navigator>
      ) : (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginContainer}>
              <StatusBar backgroundColor="#fff" translucent={false} />
              <Image source={require('./routes/img/fotoStart.jpg')} style={styles.logo} />
              <TextInput placeholder='Celular, username ou email' style={styles.input} />
              <TextInput placeholder='Sua senha' style={styles.input} />
              <View style={styles.forgotContainer}>
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Acessar</Text>
              </TouchableOpacity>
              <View style={styles.divisor}>
                <View style={styles.divisorLine}></View>
                <Text style={{ marginHorizontal: '3%', color: '#c4c4c4' }}> OU</Text>
                <View style={styles.divisorLine}></View>
              </View>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Não possui uma conta?</Text>
                <TouchableOpacity>
                  <Text style={styles.signUpButton}>Cadastre-se!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 350,
  }
});


*/