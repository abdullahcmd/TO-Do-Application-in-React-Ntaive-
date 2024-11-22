import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { height, width } = Dimensions.get("window");
import TAskButton from "../Buttons/TaskAddButton";
import ToDOList from "../FlatLists/ToDODIsplayItem";


const InputTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedToo,setEditedToo]=useState(null);

const handlePress =()=>{


  if (todo ===""){
      return;
  }

 setTodoList([...todoList,{id :todoList.length+1,title : todo}]);
setTodo("");
}
const deleteTodo=(id)=>{

const updatedList =todoList.filter((todo)=>todo.id !==id)
setTodoList(updatedList);
setTodo(null);


}

const editedTodo =(todo)=>{

  setEditedToo(todo);
  setTodo(todo.title);
  console.log(todo.title)

}


const UpdatedToDo=()=>{

      const updatedList= todoList.map((item)=>{
        if (item.id===editedToo.id){

          return {...item,title : todo};
        }
        return item;
      });
        setTodoList(updatedList);
        console.log(editedToo);
        setEditedToo(null);
        setTodo("");
}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        underlineColorAndroid="#e6f1f3"
        placeholder="Add New To-Do"
        value={todo}
        onChangeText={(newTodo) => setTodo(newTodo)}
        autoCapitalize="sentences"
        multiline={true}
      ></TextInput>
      {editedToo ?  <TAskButton ONPress = {UpdatedToDo} ButtonText ={"Update Task"} ></TAskButton> :  <TAskButton ONPress = {handlePress} ButtonText ={"Add Task"} ></TAskButton>}
     
      <ToDOList dataParameter={todoList} deleteFunction={deleteTodo} editFunction={editedTodo}></ToDOList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    //height : "70%",
    paddingTop : 60,
    alignItems: "center",
  },
  TextInput: {
    width: width - 40,
    borderColor: "black",
    borderWidth: 3,
    marginTop : 100,
    marginBottom : 30,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#e6f1f3",
    //borderRadius: 10,
  },
  placeholderStyle: {
    justifyContent: "center",
  },
});

export default InputTodo;
