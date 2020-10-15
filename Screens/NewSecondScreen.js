import React from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

const NewSecondScreen = props => {
    return(
        <View>
            <Text> Hello NewSecondScreen</Text>
            <TouchableOpacity
                style={{backgroundColor: '#22ee00', borderRadius: 5, margin: 20, width: 80, height: 42, alignItems: 'center', justifyContent: 'center'}}
                onPress = {()=>{
                    props.navigation.navigate('NewThirdScreen')
                }}
            >
                <Text>Go to NewThirdScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewSecondScreen;