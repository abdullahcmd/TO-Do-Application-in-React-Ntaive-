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
import {
  CategoryItem
} from "../../components/FlatLists/categoriesflatlist";
const { width, height } = Dimensions.get("window");
import data1 from "../../utils/data/categoriesData";
import PlusButton from "../../components/Buttons/plusButton";
const renderCategoryItem = ({ item }) => <CategoryItem title={item.title} />;

const CategoriesPortion = ({navigation}) => {
  return (
    <View style={Styles.TouchButton}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        data={data1}
        //  sliderIndicator = {false}
        //  flashScrollIndicators={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        ListFooterComponent={ <PlusButton onPress={()=>navigation.push("Add")}/>}
      />
    </View>
  );
};

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
  TouchButton: {
    height: height * 0.1,
    flexDirection: "row",
    //backgroundColor : 'red',
    alignItems: "center",
    justifyContent: "center",
  },

});

export default CategoriesPortion;
