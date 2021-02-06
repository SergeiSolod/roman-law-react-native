import React from "react";
import {StyleSheet, Text, View} from "react-native";


const CTextTask = ({ text }) => (
    <View>
    {text.map(
            (text, index) => (
                <Text key={index} style={styles.textTask}>
                    {text}
                </Text>
            )
        )}
    </View>
);

var styles = StyleSheet.create({
    textTask: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 7
    },
});

export default CTextTask;