import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const TodoApp = () => {
  const categories = ['All', 'Work', 'School'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', category: 'Work' });

  const addTodo = () => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
    setNewTodo({ title: '', description: '', category: 'Work' });
  };

  const filteredTodos = selectedCategory === 'All'
    ? todos
    : todos.filter(todo => todo.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do App</Text>
      
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />

      <TextInput
        placeholder="Enter Your ToDo's"
        value={newTodo.title}
        onChangeText={(text) => setNewTodo({ ...newTodo, title: text })}
        style={styles.input}
      />
      
      <Picker
        selectedValue={newTodo.category}
        onValueChange={(itemValue) => setNewTodo({ ...newTodo, category: itemValue })}
        style={styles.picker}
      >
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>Add To-Do</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  picker: { marginBottom: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  addButton: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  addButtonText: { color: 'white', textAlign: 'center' },
  todoItem: { padding: 10, borderBottomWidth: 1 },
  todoTitle: { fontWeight: 'bold' },
});

export default TodoApp;