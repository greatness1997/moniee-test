import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, FlatList, Modal, Button } from 'react-native'
import * as Contacts from 'expo-contacts'
import Screen from '../../components/Screen'
import colors from '../../assets/config/colors'
import RouteButton from '../../components/RouteButton'


const Contact = () => {
    const [contact, setContact] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    const getContacts = async () => {
        const {status} = await Contacts.requestPermissionsAsync()
        if(status === 'granted'){
            const {data} = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers]
            })
            if(data.length > 0){
                setContact(data)
            }
        }
    }

    useEffect(() => {
        getContacts()
    })

    return (
        <Screen>
                <View style={styles.container}>
                <View style={styles.textCont}>
                    <Text style={styles.text1}>Allow Moniee to read your Contacts?</Text>
                    <Text style={styles.text2}>To request or send funds, Moniee requires your permission to read your Contacts.</Text>
                </View>
                <RouteButton title='Grant Access' style={styles.btn} onPress={() => setModalVisible(true)}/>
                </View>
             <Modal 
                animationType='slide'
                transparent={false}
                visible={modalVisible}
            >
            
            <FlatList 
                data={contact}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                        return (
                            <View style={styles.contact}>
                                <Text style={styles.conText}>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            <RouteButton title='Request' style={styles.modalBtn} onPress={() => setModalVisible(false)}/>
            </Modal>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '40%'
    },
    btn: {
        backgroundColor: colors.primary,
        marginLeft: 3,
        marginTop: 40
    },
    modalBtn: {
        backgroundColor: colors.primary,
        marginLeft: 7,
        marginBottom: 20
    },
    textCont: {
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    text2: {
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center'
    },
    contact: {
        padding: 10
    },
    conText: {
        fontSize: 18,
        marginLeft: 20
    }
});

export default Contact