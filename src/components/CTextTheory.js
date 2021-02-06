import React from "react";
import {StyleSheet, Text, View} from "react-native";


const CTextTheory = ({ theory }) => (
    <View>
    {theory.map(
            (text, index) => (
                <Text key={index} style={styles.textInfo}>
                    {text}
                </Text>
            )
        )}
    </View>
);

var styles = StyleSheet.create({
    textInfo: {
        fontSize: 19,
        marginBottom: 13,
        marginLeft: 10,
    },
});

export default CTextTheory;