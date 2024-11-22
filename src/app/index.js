import { StyleSheet, Text, View,StatusBar } from "react-native";
import StackNavigator from "../navigation/navigation";
export default function Page() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#e6f1f3" />
    <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
