import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";

const Home = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text style={styles.headerText}>
                Вещи
            </Text>
            <CButton onPress={() =>  navigation.navigate('ThingsTheory')} title={'Теория: вещи'}/>
            <CButton onPress={() =>  navigation.navigate('HouseCladding')} title={'Облицовка дома'}/>
            <CButton onPress={() =>  navigation.navigate('PreciousStone')} title={'Драгоценный камень'}/>
            <Text style={styles.headerText}>
                Купля-продажа
            </Text>
            <CButton onPress={() =>  navigation.navigate('ContractOfSaleTheory')} title={'Теория: купля-продажа'}/>
            <CButton onPress={() =>  navigation.navigate('ShipsInTheStorm')} title={'Корабли в шторме'}/>
            <CButton onPress={() =>  navigation.navigate('CookSlave')} title={'Раб повар'}/>
            <CButton onPress={() =>  navigation.navigate('AppleOrchard')} title={'Яблоневый сад'}/>
            <CButton onPress={() =>  navigation.navigate('LostCrope')} title={'Погибший урожай'}/>

                <Text style={styles.headerText}>
                    Виндикация
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: виндикация'}/>

            <Text style={styles.headerText}>
                Подряд
            </Text>
            <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: подряд'}/>
            <CButton onPress={() =>  navigation.navigate('BurnedOutShip')} title={'Сгоревший корабль'}/>
            <CButton onPress={() =>  navigation.navigate('BurntNecklace')} title={'Сгоревшее ожерелье'}/>
             <CButton onPress={() =>  navigation.navigate('Sculpture')} title={'Скульптура'}/>


                <Text style={styles.headerText}>
                    Хранение
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Хранение'}/>

                <Text style={styles.headerText}>
                    Легат
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Легат'}/>

                <Text style={styles.headerText}>
                    Аренда
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Аренда'}/>


                <Text style={styles.headerText}>
                    Заём и залог
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Заём и залог'}/>

                <Text style={styles.headerText}>
                    Деликт
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Деликт'}/>

                <Text style={styles.headerText}>
                    Сервитут
                </Text>
                <CButton onPress={() =>  navigation.navigate('WorkAgreementTheory')} title={'Теория: Сервитут'}/>

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