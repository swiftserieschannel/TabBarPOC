
import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from 'react-native'
import {useFocusEffect} from "@react-navigation/native";

const SecondTab = props => {

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            alert('Tab Bar second tab focused')
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // alert('Tab Bar second tab unfocused')
            };
        }, [])
    );

    return (
        <SafeAreaView>
            <Text>Hello second tab</Text>
            <TouchableOpacity
                style={{backgroundColor: '#22ee00', borderRadius: 5, margin: 20, width: 80, height: 42, alignItems: 'center', justifyContent: 'center'}}
                onPress = {()=>{
                    props.navigation.navigate('NewScreen')
                }}
            >
                <Text>Click me</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SecondTab;