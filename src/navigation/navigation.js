import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RealOnboarding from '../screen/OnBoardScreen';
import HomePage from '../screen/HomePage';
import AddTodoScreen from '../screen/AddTodoScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={RealOnboarding} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomePage} options={{headerStyle : {justifyContent : "center",backgroundColor: "#e6f1f3" },headerTitleAlign: 'center',}} />
        <Stack.Screen name="Add" component={AddTodoScreen} options={{headerStyle : {justifyContent : "center",backgroundColor: "#e6f1f3" },headerTitleAlign: 'center',}} />
      </Stack.Navigator>
   
  );
}
const styles = StyleSheet.create({
header :{
justifyContent : "center",

}



})