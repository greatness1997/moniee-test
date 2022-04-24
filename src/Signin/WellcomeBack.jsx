import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Screen from '../../components/Screen'
// import WalletForm from '../../components/WalletForm'
// import WalletFormField from '../../components/WalletFormField'
// import WalletButton from '../../components/WalletButton'
import InputFieldPin from '../../components/InputFieldPin'

const WelcomeBack = ({ navigation }) => {
    const [code, setCode] = useState('')
    const [pinReady, setPinReady] = useState(false)
    const maxLength = 4


    return (
        <Screen>
            <View style={styles.textCont}>
                <Text style={styles.text1}>Welcome Back</Text>  
                <Text style={styles.text2}>Enter your pin to continue.</Text>
            </View>
            <View style={styles.formBox}>
                <InputFieldPin 
                      code={code}
                      setCode={setCode}
                      setPinReady={setPinReady}
                      maxLength={maxLength}
                      navigation={navigation}
                />

            <Text style={styles.pin}>Forget Pin?</Text>
        </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    textCont: {
        marginTop: '20%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 19,
        marginTop: 10
    },
    field: {
        width: '50%',
    },
    formBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    pin: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'italic',
        marginTop: 40
    }
});

export default WelcomeBack