import React, {useState} from "react";
import {View, Text, StyleSheet, Button,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import { THEME } from '../../theme'
import CButton from "../../components/CButton";

const ThingsTheory = () => {


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.textInfoWrapper}>
                    <Text style={styles.textInfo}>
                        В римском праве вещи бывают простые, сложные и составные.
                    </Text>
                    <Text style={styles.textInfo}>
                        Простые вещи представляют собой естественное единство: раб, животное, статуя
                    </Text>
                    <Text style={styles.textInfo}>
                        Составные (сложные) вещи состоят из нескольких простых и (или) сложных вещей,
                        материально соединенных между собой: строение,
                        корабль, телега. Если простая вещь, которая имеет свой правовой режим,
                        становится частью составной вещи, она подпадает под режим этой последней.
                        Но если составная вещь распадается, выделившаяся из нее простая вещь
                        возвращается к своему изначальному режиму (например, чужие материалы,
                        использованные для постройки на собственной земле).
                    </Text>
                    <Text style={styles.textInfo}>
                        Собирательные вещи состоят из
                        нескольких простых и (или) сложных вещей, соединенных между собой не
                        материально, а лишь общим назначением: стадо овец, поместье (включающее
                        земельный участок, все постройки на нем)
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

ThingsTheory.navigationOptions = {
    headerTitle: 'Теория: вещи'
}

const styles = StyleSheet.create({
    textTaskWrapper: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 7,
        marginBottom: 7,
        flex: 1,
    },
    textTask: {
        fontSize: 20,
        textAlign: 'center'
    },
    textQuestion: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
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
    textInfoWrapper: {
        marginRight: 10,
        marginBottom: 5,
    },
    textInfo: {
        fontSize: 19,
        marginTop: 6,
        marginBottom: 8,
        marginLeft: 10,
    },
    boldText: {
        fontWeight: 'bold'
    },
})

export default ThingsTheory;