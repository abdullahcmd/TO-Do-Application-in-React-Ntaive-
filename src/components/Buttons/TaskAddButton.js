import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window");
const TAskButton = ({ONPress,ButtonText}) => {
  return (
    <TouchableOpacity
  style={styles.getStarted}
  onPress={ONPress} // Add an onPress prop to handle the press
>
  <Text style={styles.ButtonText}>{ButtonText}</Text>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStarted: {
    // Height of the spacer
    height: 50,
    width: width-40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a246c5",
    margin : 10,
  },
  ButtonText : {
    fontSize : 20,
    color : 'white',

  }

});

export default TAskButton;