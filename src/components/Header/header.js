// Header.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header1 = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>My To Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //backgroundColor: '#4CAF50', // Header background color
    padding: 15, // Space inside the header
    alignItems: "center", // Center items horizontally
  },
  logo: {
    fontSize: 20,
    fontColor: "black",
  },
});

export default Header1;
