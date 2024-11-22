import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import InputTodo from '../../components/TextInput/textInput';
import ToDOList from '../../components/FlatLists/ToDODIsplayItem';
const {width,height} = Dimensions.get('window')
const Screen = () => {
  return (
    <View style = {styles.container}>
    <InputTodo ></InputTodo>
    <ToDOList></ToDOList>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    height : height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;