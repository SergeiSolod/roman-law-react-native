import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";

const Home = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text style={styles.headerText}>
                Вещи
            </Text>
            <CButton onPress={() =>  props.navigation.navigate('ThingsTheory')} title={'Теория: вещи'}/>
            <CButton onPress={() =>  props.navigation.navigate('HouseCladding')} title={'Облицовка дома'}/>
            <CButton onPress={() =>  props.navigation.navigate('PreciousStone')} title={'Драгоценный камень'}/>
            <Text style={styles.headerText}>
                Купля-продажа
            </Text>
            <CButton onPress={() =>  props.navigation.navigate('ContractOfSaleTheory')} title={'Теория: купля-продажа'}/>
            <CButton onPress={() =>  props.navigation.navigate('ShipsInTheStorm')} title={'Корабли в шторме'}/>
            <CButton onPress={() =>  props.navigation.navigate('CookSlave')} title={'Раб повар'}/>
            <CButton onPress={() =>  props.navigation.navigate('AppleOrchard')} title={'Яблоневый сад'}/>
            <Text style={styles.headerText}>
                Подряд
            </Text>
            <CButton onPress={() =>  props.navigation.navigate('WorkAgreementTheory')} title={'Теория: подряд'}/>
            <CButton onPress={() =>  props.navigation.navigate('BurnedOutShip')} title={'Сгоревший корабль'}/>
            <CButton onPress={() =>  props.navigation.navigate('BurntNecklace')} title={'Сгоревшее ожерелье'}/>
             <CButton onPress={() =>  props.navigation.navigate('Sculpture')} title={'Скульптура'}/>
            </ScrollView>
        </SafeAreaView>
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