import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputTodo from '../components/TextInput/textInput';
const AddTodoScreen = () => {
  return (
    <InputTodo></InputTodo>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTodoScreen;