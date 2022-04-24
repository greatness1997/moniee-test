import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AppNav from "./src/Navigation/AppNav";
import navTheme from "./src/Navigation/navTheme";



export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <AppNav />
    </NavigationContainer>
  );
}
