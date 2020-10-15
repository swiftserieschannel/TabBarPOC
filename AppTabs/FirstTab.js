import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Dimensions} from "react-native";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import React from "react";
import Carousel from 'react-native-snap-carousel';
import { useFocusEffect } from '@react-navigation/native';

const FirstTab = props => {
    const entries = ["Entry 1", "Entry 2", "Entry 3", "Entry 4", "Entry 5", "Entry 6"]
    const _renderItem = ({item, index}) => {
        return (
            <View style={{backgroundColor: 'orange', padding: 20}}>
                <Text style={styles.title}>{item}</Text>
            </View>
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            alert('Tab Bar first tab focused')
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // alert('Tab Bar first tab unfocused')
            };
        }, [])
    );

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View style={{paddingVertical: 20}}>
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={entries}
                        renderItem={_renderItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('screen').width - 60}
                    />
                </View>
            </SafeAreaView></>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default FirstTab;