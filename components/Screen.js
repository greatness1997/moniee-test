import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import colors from "../assets/config/colors";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%'
  }
});

export default Screen;
