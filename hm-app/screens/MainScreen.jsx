import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { HomeScreen, SosScreen, ChatScreen, AccountScreen } from '.';

export default function MainScreen() {
  const Tab = createBottomTabNavigator();

  const containerTabActive = {
    height: 50,
    width: 50,
    backgroundColor: '#14b8a6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }

  const containerTabInactive = {
    height: 50,
    width: 50,
    // backgroundColor: '#14b8a6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }

  const textStyleActive = {
    fontSize: 10,
    color: 'white'
  }

  const textStyleInactive = {
    fontSize: 10,
    color: 'gray'
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size, style, textStyle }) => {
          let iconName;
          if (route.name === "Home") {
            textStyle = focused ? textStyleActive : textStyleInactive, style = focused ? containerTabActive : containerTabInactive, iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SOS") {
            textStyle = focused ? textStyleActive : textStyleInactive, style = focused ? containerTabActive : containerTabInactive, iconName = focused ? "bonfire" : "bonfire-outline";
          } else if (route.name === "Chat") {
            textStyle = focused ? textStyleActive : textStyleInactive, style = focused ? containerTabActive : containerTabInactive, iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (route.name === "Account") {
            textStyle = focused ? textStyleActive : textStyleInactive, style = focused ? containerTabActive : containerTabInactive, iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return (
            <View style={style}>
              <Ionicons name={iconName} size={27} color={color} />
              <Text style={textStyle}>{route.name}</Text>
            </View>
          )
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SOS" component={SosScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}



