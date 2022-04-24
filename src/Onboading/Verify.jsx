import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import Screen from '../../components/Screen'
import WalletForm from '../../components/WalletForm'
import WalletFormField from '../../components/WalletFormField'
import WalletButton from '../../components/WalletButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InputFieldOTP from '../../components/InputFieldOTP'



const Verify = ({ navigation }) => {
    const [code, setCode] = useState('')
    const [pinReady, setPinReady] = useState(false)
    const maxLength = 4


    return (
        <Pressable onPress={Keyboard.dismiss}>
            <TouchableOpacity style={styles.iconCont} onPress={() => navigation.navigate('signup')}>
                <MaterialCommunityIcons name="arrow-left" size={30}/>
            </TouchableOpacity>
            <View style={styles.textCont}>
                <Text style={styles.text1}>Verification</Text>
                <Text style={styles.text2}>I inputed a random text here for the project, thank you</Text>
            </View>
            <View>

                <InputFieldOTP 
                    code={code}
                    setCode={setCode}
                    setPinReady={setPinReady}
                    maxLength={maxLength}
                    navigation={navigation}
                />
               
                <View style={styles.duration}>
                    <Text style={styles.durationT1}>Verification code will be resent in</Text>
                    <Text style={styles.durationT2}>0:45</Text>
                </View>
               
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    textCont: {
        marginTop: '10%',
        marginLeft: 15,
        marginBottom: 20
    },
    iconCont:{
        marginTop: '10%',
        marginLeft: 15,
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 18,
        marginTop: 10
    },
    box: {
        width: '20%',
        height: 80,
        borderRadius: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection:  'row',
        justifyContent: 'center',
        marginRight: 5
    },
    duration: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    durationT1: {
        fontSize: 15
    },
    durationT2: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        fontStyle: 'italic'
    }
});

export default Verify