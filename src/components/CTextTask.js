import React from "react";
import { StyleSheet, Text } from "react-native";


const CTextTask = ({ text }) => (
    <Text style={styles.textTask}>
        {text}
    </Text>
);

var styles = StyleSheet.create({
    textTask: {
        fontSize: 20,
        textAlign: 'center'
    },
});

export default CTextTask;