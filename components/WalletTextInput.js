import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/config/colors";

function WalletTextInput({ icon, style, ...others }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput placeholderTextColor={colors.grey} {...others} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "95%",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.lightgrey,
  },
  icon: {
    marginRight: 10,
  },
});

export default WalletTextInput;
