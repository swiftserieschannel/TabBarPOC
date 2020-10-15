
import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from 'react-native'

const SecondTab = props => {
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