import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Store" component={HomeStack} />
        <Drawer.Screen name="Locations" component={CartScreen} />
        <Drawer.Screen name="Blog" component={HomeStack} />
        <Drawer.Screen name="Jewelry" component={CartScreen} />
        <Drawer.Screen name="Etronic" component={HomeStack} />
        <Drawer.Screen name="Clothing" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
