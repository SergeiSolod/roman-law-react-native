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
            <CButton onPress={() =>  props.navigation.navigate('HouseCladding')} title={'Облицовка дома'}/>
            <CButton onPress={() =>  props.navigation.navigate('PreciousStone')} title={'Драгоценный камень'}/>
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