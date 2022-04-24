import React from "react";
import { Text, View, StyleSheet,  Alert } from "react-native";
import Screen from "../../components/Screen";
import WalletFormField from "../../components/WalletFormField";
import WalletForm from "../../components/WalletForm";
// import WalletTextInput from "../components/WalletTextInput";
import WalletButton from "../../components/WalletButton";

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.textCont}>
          <Text style={styles.text1}>Login</Text>
          <Text style={styles.text2}>Enter your phone number</Text>
        </View>
      <View>
      <WalletForm
        initialValues={{ phoneNo: "" }}
        onSubmit={(values) => {
          if(values.phoneNo !== ''){
            navigation.navigate('welcome')
          }else{
            Alert.alert(
              "Error",
              "Insert your phone number",
              [{text: 'Ok'}]
          )
          }
        }}
      >
        <WalletFormField
          placeholder="Phone Number"
          icon="phone"
          autoCorrect={false}
          name="phoneNo"
          keyboardType="numeric"
        />
        <WalletButton title="Continue" icon="login" size={25} />
      </WalletForm>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  textCont: {
    marginTop: '20%',
    marginLeft: 15,
    marginBottom: 20
},
text1: {
    fontSize: 30,
    fontWeight: 'bold'
},
text2: {
    fontSize: 18,
    marginTop: 10
}
});

export default LoginScreen;
