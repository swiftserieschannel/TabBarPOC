
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTab from "../AppTabs/FirstTab";
import SecondTab from "../AppTabs/SecondTab";
import React from 'react'
import ThirdTab from "../AppTabs/ThirdTab";
import FourthTab from "../AppTabs/FourthTab";
import Icon from 'react-native-ionicons'
import NewScreen from "../Screens/NewScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        // iconName = focused
                        //     ? 'ios-information-circle'
                        //     : 'ios-information-circle-outline';
                        iconName = 'ios-home'
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }else if (route.name === 'Profile') {
                        iconName = 'ios-contact';
                    }else if (route.name === 'Chat') {
                        iconName = 'ios-chatbubbles';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={FirstTab} />
            <Tab.Screen name="Settings" component={SecondTab} />
            <Tab.Screen name="Profile" component={ThirdTab} />
            <Tab.Screen name="Chat" component={FourthTab} />
        </Tab.Navigator>
    )
}


const AppNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabBar" component={TabNavigator} />
            <Stack.Screen name="NewScreen" component={NewScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator;