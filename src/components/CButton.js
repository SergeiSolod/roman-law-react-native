import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const CButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

var styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ffa500",
        borderRadius: 25,
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default CButton;