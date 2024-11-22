import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesPortion from './main/categories';
import InputTodo from '../components/TextInput/textInput';
const HomePage = ({navigation}) => {
  return (
   <View>
   <View>
   <CategoriesPortion navigation={navigation}></CategoriesPortion>
   </View>
   <View style ={{marginTop :50 }}>
   <InputTodo></InputTodo>
   </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;