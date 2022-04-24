import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../Onboading/SignUp'
import Verify from '../Onboading/Verify'
import Bank from '../Onboading/Bank&Bvn'
import LoginScreen from '../Signin/LoginScreen'
import WelcomeBack from '../Signin/WellcomeBack'
import Request from '../Landing/Request'
import Send from '../Landing/Send'
import Contact from '../Landing/Contact'



const Stack = createStackNavigator()

const AppNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='signup' 
                component={SignUp} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='verify' 
                component={Verify} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='bank' 
                component={Bank} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='login' 
                component={LoginScreen} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='welcome' 
                component={WelcomeBack} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='request' 
                component={Request} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='send' 
                component={Send} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='contact' 
                component={Contact} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppNav