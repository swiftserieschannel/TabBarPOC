import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const NewThirdScreen = props => {
    return(
        <View>
            <Text> Hello NewSecondScreen</Text>
            <TouchableOpacity
                style={{backgroundColor: '#22ee00', borderRadius: 5, margin: 20, width: 80, height: 42, alignItems: 'center', justifyContent: 'center'}}
                onPress = {()=>{
                    props.navigation.popToTop()
                }}
            >
                <Text>Go to Root</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewThirdScreen;