import {SafeAreaView, ScrollView, StatusBar,Image, StyleSheet, Text, View, Dimensions} from "react-native";
import {
    Colors,
} from "react-native/Libraries/NewAppScreen";
import React, {useEffect, useReducer} from "react";
import Carousel from 'react-native-snap-carousel';
import {FirstTabInitialState, FirstTabReducer} from "./FirstTabReducer";
import * as Actions from '../AppConstants/Actions';
import {getHomeScreenData} from "./FirstTabAPIHelper";
import PlatformActivityIndicator from "../CustomComponents/PlatformActivityIndicator";

const FirstTab = props => {
    const entries = ["Entry 1", "Entry 2", "Entry 3", "Entry 4", "Entry 5", "Entry 6"]
    const [reducerState, reducerDispatch] = useReducer(FirstTabReducer, FirstTabInitialState);

    useEffect(()=> {
        reducerDispatch({type: Actions.GET_HOME_DATA});
        getHomeScreenData((response, error) => {
            if (response?.data) {
                reducerDispatch({type: Actions.GET_HOME_DATA, data: response.data});
            } else {
                if (error) {
                    alert("error")
                    return
                }
                alert("Something went wrong!")
            }
        })
    },[])

    const _headerCarouselItem = ({item, index}) => {
        console.log(item)
        return (
            <View style={{height: 150, backgroundColor: 'gray', border: 5}}>
                <Image source={{uri:item}} />
            </View>
        );
    }

    if (reducerState.isLoading) {
        return <PlatformActivityIndicator/>
    }

    console.log(reducerState.data)
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{backgroundColor: 'rgb(250,237,203)',flex: 1, paddingVertical: 20}}>
                <View>
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={reducerState.data?.topCarouselData ?? []}
                        renderItem={_headerCarouselItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('screen').width - 60}
                        contentContainerCustomStyle={{borderRadius: 5, overflow: 'hidden'}}
                        autoplay={true}
                    />
                    <View style={styles.dataContainer}>
                        <Text style={styles.heading}>{reducerState.data?.header?.title ?? ""}</Text>
                        <Text style={styles.description}>{reducerState.data?.header?.description ?? ""}</Text>
                        {
                            (reducerState.data?.aashramFeature?.features ?? []).length > 0
                            ? <ListComponent />
                                :
                        }
                    </View>
                </View>
            </SafeAreaView></>
    )
}

const styles = StyleSheet.create({
   heading: {
        fontSize: 20,
       marginTop: 32,
       fontWeight: 'bold'
   },
    description:{
        fontSize: 16,
        marginVertical: 8,
    },
    dataContainer:{
       marginHorizontal: 10,
    }
});

export default FirstTab;