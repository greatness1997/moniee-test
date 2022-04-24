import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../assets/config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";



const RouteButton = ({ title, icon, size ,style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {icon && 
                <MaterialCommunityIcons 
                    name={icon}
                    size={size}
                    color={colors.light}
                />
            }
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginLeft: 10,
        height: 60,
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        flexDirection: "row"
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.white,
        marginLeft: 8
    }
})

export default RouteButton