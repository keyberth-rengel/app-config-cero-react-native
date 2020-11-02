import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//pages
import Home from '../pages/Home';
import DetailsMovie from '../pages/DetailsMovie';
import Search from '../pages/SearchMovie';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color}}>Home</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color}}>Search</Text>
          ),
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="DetailsMovie" component={DetailsMovie} />
    </Stack.Navigator>
  );
}
export default function () {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
