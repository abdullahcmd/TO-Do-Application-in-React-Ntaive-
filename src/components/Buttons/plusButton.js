
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Text,
    ListFooterComponent,
    useColorScheme,
    FlatList,
    View,
    Dimensions,
  } from "react-native";
  import React from "react";


 const PlusButton = ({onPress}) => (
    <View style={Styles.PlusButtonContainer}>
      <TouchableOpacity style={Styles.PlusButton} onPress={onPress}>
        <Text style={Styles.PlusButtonStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );

  const Styles = StyleSheet.create({

    PlusButtonContainer: {
      justifyContent: "center", // Center the plus button container vertically
      alignItems: "center", // Align the plus button in the center
      //marginLeft: 10, // Margin between last item and the button
    }, PlusButtonStyle: {
        fontSize: 30,
      },
      PlusButton: {
        width: 50, // Diameter of the circle
        height: 50, // Same as width for a perfect circle
        borderRadius: 25, // Half of the width/height to make it circular
        // Background color of the button
        // alignSelf: 'center',
        //padding : 10,
        justifyContent: "center", // Center the content vertically
        alignItems: "center", // Center the content horizontally
        margin: 10,
        borderColor: "black",
        borderWidth: 3,
        marginTop: 15,
        backgroundColor: "#e6f1f3",
      },
  });

  export default PlusButton;