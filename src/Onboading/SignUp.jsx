import { View, Text, StyleSheet, Alert } from 'react-native'
import Screen from '../../components/Screen'
import WalletForm from '../../components/WalletForm'
import WalletFormField from '../../components/WalletFormField'
import WalletButton from '../../components/WalletButton'

const SignUp = ({ navigation }) => {
    return (
        <Screen>
            <View style={styles.textCont}>
                <Text style={styles.text1}>Let's begin</Text>
                <Text style={styles.text2}>I inputed a random text here for the project, thank you</Text>
            </View>
            <View>
            <WalletForm
                initialValues={{ phoneNo: "" }}
                onSubmit={values => {
                    if(values.phoneNo !== ""){
                        navigation.navigate('verify')
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
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
            <WalletButton title="Get Started"  style={styles.btn} />
        </WalletForm>
        </View>
        </Screen>
    )
}

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

export default SignUp