import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Screen from '../../components/Screen'
import WalletForm from '../../components/WalletForm'
import WalletFormField from '../../components/WalletFormField'
import WalletButton from '../../components/WalletButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Bank = ({ navigation }) => {
    return (
        <Screen>
            <TouchableOpacity style={styles.iconCont} onPress={() => navigation.navigate('verify')}>
                <MaterialCommunityIcons name="arrow-left" size={30}/>
            </TouchableOpacity>
            <View style={styles.textCont}>
                <Text style={styles.text1}>Add your bank detail's</Text>
                <Text style={styles.text2}>Kindly ensure the details you entered belong to you.</Text>
            </View>
            <View>
            <WalletForm
                initialValues={{ bank: "", accountNo: "", bvn: "" }}
                onSubmit={(values) => {
                    if(values.bank !== "" || values.accountNo !== "" || values.bvn !== ""){
                        navigation.navigate('login')
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
                    placeholder="Bank"
                    icon="bank"
                    autoCorrect={false}
                    name="bank"
                    autoCapitalize="none"
                    keyboardType="text"
                />
                  <WalletFormField
                    placeholder="Account Number"
                    icon="numeric"
                    autoCorrect={false}
                    name="accountNo"
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
                <WalletFormField
                    placeholder="BVN"
                    icon="numeric"
                    autoCorrect={false}
                    name="bvn"
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
            <WalletButton title="Get Started" />
        </WalletForm>
        </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    iconCont: {
        marginTop: '10%',
        marginLeft: 15,
    },
    textCont: {
        marginTop: '10%',
        marginLeft: 15,
        marginBottom: 20
    },
    text1: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 19,
        marginTop: 10
    }
});

export default Bank