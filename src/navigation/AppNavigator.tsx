import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { HomeScreen } from '../features/home/HomeScreen';
import ActivitiesScreen from '../features/activities/ActivitiesScreen'
import { NutritionalArticlesScreen } from '../features/nutrition/NutritionalArticlesScreen';
import ProfileScreen from '../features/activities/profile/ProfileScreen';
import LoginScreen from '../features/activities/profile/LoginUser';
import RegistrationScreen from '../features/activities/profile/RegistrationScreen';

export type RootStackParamList = {
  Home: undefined;
  Activities: undefined;
  Nutrition: undefined;
  Profile : undefined;
  Login: undefined;
  Registration: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Nutrition" component={NutritionalArticlesScreen} /> 
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Registration' component={RegistrationScreen} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
