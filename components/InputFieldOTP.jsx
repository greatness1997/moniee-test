import React, { useRef, useState, useEffect } from 'react'
import { TextInput, View, Text, StyleSheet, Pressable } from 'react-native'
import colors from '../assets/config/colors'


const InputFieldOTP = ({ code, setCode, setPinReady, maxLength, navigation }) => {
    const [isContFocus, setIsConFocus] = useState(false)
    const inputRef = useRef(null)
    

    const digitArray = new Array(maxLength).fill(0)

    const digitInput = (_value, index) => {
        const emptyInputNum = " "
        const digit = code[index] || emptyInputNum

        return(
            <View style={styles.box} key={index}>
                 <Text style={styles.text}>{digit}</Text>
            </View>
        )
    }

    const handlePress = () => {
        setIsConFocus(true)
        inputRef.current.focus()
    }

    const handleOnBlur = () => {
        setIsConFocus(true)
    }

    useEffect(() => {
        if(code.length === maxLength){
            navigation.navigate('bank')
            setCode('')
        }
       
        
    }, [code])

    return (
        <>
        <Pressable style={styles.container} onPress={handlePress}>
            {/* <View style={styles.box}> */}
                {/* <Text style={styles.text}></Text> */}
                {digitArray.map(digitInput)}
            {/* </View> */}
        </Pressable>
        
        <View style={styles.inputBox}>
            <TextInput 
                keyboardType='number-pad'
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                textContentType='oneTimeCode'
                returnKeyType='done'
                ref={inputRef}
                onBlur={handleOnBlur}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputBox: {
       position: 'absolute',
       width: 1,
       height: 1,
       opacity: 0
    },
    box: {
        borderWidth: 2,
        borderColor: colors.grey,
        minWidth: '15%',
        padding: 12,
        borderRadius: 5,
    },
    container: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.dark
    }
});

export default InputFieldOTP