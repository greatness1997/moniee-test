import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/config/colors';
import RouteButton from '../../components/RouteButton';
import Screen from '../../components/Screen';



const FundSent = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.textCont}>
                    <Text style={styles.text1}>Money Sent</Text>
                    <Text style={styles.text2}>Your request for #2,000 to terry and 5 others has been sent</Text>
                </View>
                <RouteButton title='Go Home' style={styles.btn}/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '40%'
    },
    btn: {
        backgroundColor: colors.lightgrey,
        marginLeft: 3,
        marginTop: '80%'
    },
    textCont: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20
    },
    text2: {
        fontWeight: '400',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default FundSent