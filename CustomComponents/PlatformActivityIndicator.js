import React, { Component } from "react";
import { ActivityIndicator, Platform } from "react-native";
import CustomActivityIndicator from "./CustomActivityIndicator.js";
import colors from "../AppConstants/colors";

export default class PlatformActivityIndicator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var size = (this.props.size != null) ? this.props.size : 48;
        var color = (this.props.color != null) ? this.props.color : colors.blue;

        if (Platform.OS === "ios") {
            return <CustomActivityIndicator size={size} color={color} style={{ justifyContent: "center", alignItems: "center" }} />;
        } else {
            return <ActivityIndicator size={size} color={color} />;
        }
    }
}