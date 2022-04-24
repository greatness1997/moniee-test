import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Screen from '../../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../assets/config/colors'
import WalletForm from '../../components/WalletForm'
import WalletFormField from '../../components/WalletFormField'
import WalletButton from '../../components/WalletButton'

const SendMoney = ({ navigation }) => {
    return (
        <Screen>
          
            <View style={styles.iconCont}>
                <TouchableOpacity onPress={() => navigation.navigate('request')}>
                    <MaterialCommunityIcons name="arrow-left" size={30}/>
                </TouchableOpacity>
                <Text style={styles.conText}>Send Money</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.circle}></View>
                <View style={styles.textCont}>
                    <Text style={styles.text1}>Send</Text>
                    <Text style={styles.text2}>₦15,000</Text>
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
            <WalletForm
                initialValues={{ purpose: "", phoneNo: "" }}
                onSubmit={(values) => {
                    if(values.purpose !== "" && values.phoneNo !== ""){
                      navigation.navigate('contact')
                    }else{
                        Alert.alert(
                            'Error',
                            'Please fill in all fields',
                            [{
                                text: 'Ok'
                            }]
                        )
                    }
                }}
            >
                <WalletFormField
                    placeholder="Purpose of sending"
                    autoCorrect={false}
                    name="purpose"
                    autoCapitalize="none"
                />
                <WalletFormField
                    placeholder="Phone Number"
                    icon="phone"
                    autoCorrect={false}
                    name="phoneNo"
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
                    <WalletButton title="Send Money"  style={styles.btn}/>
                </WalletForm>
            </View>
          
        </Screen>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.lightgrey,
        marginTop: '50%'
    },
    conText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
       
    },
    box: {
        backgroundColor: colors.light,
        width: 200,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginLeft: '23%',
        borderWidth: 1,
        borderColor: colors.grey,
        flexDirection: 'row',
        marginTop: 30
    },
    circle: {
        backgroundColor: colors.lightgrey,
        width: 60,
        height: 60,
        borderRadius: 50,
        
    },
    textCont: {
        marginLeft: 10,
        
    },
    text1: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 3
    },
    text2: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    iconCont: {
        flexDirection: 'row',
        marginTop: '15%',
        marginLeft: 30
    }
});

export default SendMoney