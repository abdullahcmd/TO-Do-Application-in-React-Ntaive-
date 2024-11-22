import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";


const { width, height } = Dimensions.get("window");



const ToDOList = ({dataParameter,deleteFunction,editFunction}) => {

    
  return (
    <View style={Styles.TouchButton}>
      <FlatList
        horizontal={false}
        data={dataParameter}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={Styles.CategoryContainer}>
            <Text style={Styles.CategoryTitle}>{item.title}</Text>
            <TouchableOpacity>
              <IconButton icon="pencil" 
              onPress={() => editFunction(item)}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <IconButton
                icon="trash-can"
                onPress={() => deleteFunction(item.id)}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  CategoryContainer: {
    margin: 5,
    padding: 10,
    width : width-30,
    backgroundColor: "#e6f1f3",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
   // justifyContent: "center",
  },
  CategoryTitle: {
    fontSize: 20,
    color: "black",
    flex: 1,
    alignItems: "center",
  },
  TouchButton: {
   // height: height,
    flexDirection: "column",
  },

  IconStyle: {},
});

export default ToDOList;
