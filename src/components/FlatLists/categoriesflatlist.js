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


export const CategoryItem = ({ title }) => (
    <View style={Styles.CategoryContainer}>
      <TouchableOpacity>
        <Text style={Styles.CategoryTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
);
const Styles = StyleSheet.create({
    CategoryContainer: {
      // width : width * 0.5,
  
      //backgroundColor : 'black',
      alignItems: "center",
      justifyContent: "center",
    },
    CategoryTitle: {
      fontSize: 20,
      color: "black",
      borderColor: "black",
      borderWidth: 2,
      textAlign: "center",
      backgroundColor: "#e6f1f3",
      padding: 13,
      borderRadius: 15,
      //   shadowOpacity: 1,
      // shadowOffset : 1,
      //shadowRadius: 1.5,
      //elevation: 7,
      margin: 10,
    },
    
  });

