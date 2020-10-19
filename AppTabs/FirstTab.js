import {SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Text, View, Dimensions} from "react-native";
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

    useEffect(() => {
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
    }, [])

    const _headerCarouselItem = ({item, index}) => {
        console.log(item)
        return (
            <View style={{height: 200, backgroundColor: 'gray', border: 5}}>
                <Image source={{
                    uri: item
                }} onError={(error)=>{console.log(error)}} style={{flex: 1,resizeMode: 'cover'}}/>
            </View>
        );
    }

    if (reducerState.isLoading) {
        return <PlatformActivityIndicator/>
    }

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{backgroundColor: 'rgb(250,237,203)', flex: 1}}>
                <ScrollView contentContainerStyle={{paddingVertical: 16}}>
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={reducerState.data?.topCarouselData ?? []}
                        renderItem={_headerCarouselItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('screen').width - 60}
                        contentContainerCustomStyle={{borderRadius: 5, overflow: 'hidden'}}
                        autoplay={true}
                        loop={true}
                    />
                    <View style={styles.dataContainer}>
                        <Text style={styles.heading}>{reducerState.data?.header?.title ?? ""}</Text>
                        <Text style={styles.description}>{reducerState.data?.header?.description ?? ""}</Text>
                        {
                            (reducerState.data?.aashramFeature?.features ?? []).length > 0
                                ? <ListComponent heading={reducerState.data?.aashramFeature?.title ?? ''}
                                                 listItems={reducerState.data?.aashramFeature?.features ?? []}/>
                                : null
                        }

                        {
                            (reducerState.data?.news?.images ?? []).length > 0
                                ? <View style={styles.cardsStackMainContainer}>
                                <View style={{alignItems: 'center',flexDirection: 'row'}}>
                                    <Text style={styles.listHeader}>{reducerState.data?.news?.title ?? ""}</Text>
                                    <View style={{backgroundColor: 'grey', height: 1,flex: 1, marginLeft: 5}}/>
                                </View>
                                    <Carousel
                                        // ref={(c) => { this._carousel = c; }}
                                        containerCustomStyle={{marginTop: 16}}
                                        data={reducerState.data?.news?.images ?? []}
                                        renderItem={_headerCarouselItem}
                                        sliderWidth={Dimensions.get('screen').width-20}
                                        itemWidth={Dimensions.get('screen').width - 60}
                                        contentContainerCustomStyle={{borderRadius: 5, overflow: 'hidden'}}
                                        autoplay={true}
                                        loop={true}
                                        layout={'stack'}
                                        layoutCardOffset={18}
                                    />
                                </View>
                                : null
                        }


                    </View>
                </ScrollView>
            </SafeAreaView></>
    )
}


const ListComponent = props => {
    let list = props.listItems ?? []
    return (
        <View style={styles.listContainer}>
            <Text style={styles.listHeader}>{props.heading}</Text>
            {list.length > 0
                ? list.map((item, index) => {
                    return (
                        <View style={{flexDirection: 'row', marginTop: 8}} key={index}>
                            <View style={styles.bullet}></View>
                            <Text style={styles.listItemText}>{list[index]}</Text>
                        </View>
                    )
                })
                : null}
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        marginTop: 32,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        marginVertical: 8,
    },
    dataContainer: {
        marginHorizontal: 10,
    },
    listContainer: {
        marginTop: 32,
    },
    listHeader: {
        fontSize: 16,
        fontWeight: 'bold'

    },
    listItemText: {
        fontSize: 14,
        flex: 1
    },
    bullet: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'grey',
        marginHorizontal: 5,
        marginTop: 5
    },
    cardsStackMainContainer: {
        marginTop: 32
    }
});

export default FirstTab;