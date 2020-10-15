import React from 'react'
import {Text, SafeAreaView, TouchableOpacity} from "react-native";


const NewScreen = props => {
    return (
             <SafeAreaView>
                 <Text>Hello New Screen</Text>
                 <TouchableOpacity
                     style={{backgroundColor: '#22ee00', borderRadius: 5, margin: 20, width: 80, height: 42, alignItems: 'center', justifyContent: 'center'}}
                     onPress = {()=>{
                         props.navigation.navigate('NewSecondScreen')
                     }}
                 >
                     <Text>Go to NewSecondScreen</Text>
                 </TouchableOpacity>
             </SafeAreaView>
    )
}

export default NewScreen;

