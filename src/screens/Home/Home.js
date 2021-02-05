import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {THEME} from '../../theme'
import CButton from "../../components/CButton";

const Home = (props) => {
    return (
        <View>
            <Text style={styles.headerText}>
                Вещи
            </Text>
            <CButton onPress={() =>  props.navigation.navigate('HouseCladding')} title={'Задача про облицовку'}/>
            <CButton onPress={() =>  props.navigation.navigate('Rock')} title={'Задача про облицовку'}/>
            <CButton onPress={() =>  props.navigation.navigate('Task1')} title={'Задача про облицовку'}/>
            <CButton onPress={() =>  props.navigation.navigate('Task1')} title={'Задача про облицовку'}/>
            <CButton onPress={() =>  props.navigation.navigate('Task1')} title={'Задача про облицовку'}/>
        </View>
    );
};

Home.navigationOptions = {
    headerTitle: '12 задач по римскому праву'
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 23,
        marginTop: 3,
        marginBottom: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default Home;