import React from "react";
import { StyleSheet, Text } from "react-native";


const CTextQuestion = ({ text }) => (
    <Text style={styles.textQuestion}>
        {text}
    </Text>
);

var styles = StyleSheet.create({
    textQuestion: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default CTextQuestion;