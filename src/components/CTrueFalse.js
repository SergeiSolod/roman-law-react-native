import React from "react";
import {StyleSheet, Text, View} from "react-native";


const CTrueFalse = ({ answerBool }) => (
    <View>
    {answerBool ?<Text style={styles.textInfoCorrectly}>Решение правильное.</Text> : <Text style={styles.textInfoWrong}>Решение неправильное. </Text>}
    </View>
);

var styles = StyleSheet.create({
    textInfoCorrectly: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green'
    },
    textInfoWrong: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
    },
});

export default CTrueFalse;