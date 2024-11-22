import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

import data from "../../utils/data/onboardslidesData";
import OnBoard from "../../screen/main/onboarding";
const renderonBoardsScreen = ({ item }) => <OnBoard title={item.title} description ={item.description} imageUrl={item.imageUrl} />;

const AllFlatList = () => {
  return (
    <FlatList
      horizontal={true}
      pagingEnabled
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderonBoardsScreen}
    />
  );
};

export default AllFlatList;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "white",
    width: width,
    justifyContent: "center", // Centers content vertically
    alignItems: "center",
  },
  Image1: {
    height: "100%",
    width: "100%",
    //backgroundColor : 'black',
    resizeMode: "cover",
  },
  TextHeading: {
    fontSize: 44,
    marginTop: 260,
    height: 180,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Amaranth",
    //backgroundColor : 'red',
    textAlign: "center",
    // alignItems : 'center',
    justifyContent: "center",

    width: "80%",
  },
  ImageContainer: {
    height: "40%",
    width: "100%",
    padding: 10,
    //  backgroundColor : 'black',
    position: "absolute",
    top: 90,
    // resizeMode : 'cover',
  },
  textContainer: {
    //marginTop : 100,
    height: 120,
    width: "90%",
    padding: 3,

    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    //backgroundColor : 'green',

    // resizeMode : 'cover',
  },
  spacer: {
    height: 140, // Height of the spacer
  },
  getStarted: {
    // Height of the spacer
    height: 55,
    width: "90%",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a246c5",
  },
  ButtonText: {
    // Height of the spacer
    fontSize: 22,
    color: "white",
    //fontWeight : 'bold',
    fontFamily: "Amaranth",
    //backgroundColor : 'red',
    textAlign: "center",
    // alignItems : 'center',
    //justifyContent : 'center',
    // width : '80%'
  },

  spacer2: {
    height: 40, // Height of the spacer
  },
});
