import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import {THEME} from '../../theme'

const Home = (props) => {
    const goTask1 = () => {
        props.navigation.navigate('Task1')
    }
    const goTask2 = () => {
        props.navigation.navigate('Task2')
    }
    return (
        <View>
            <Text style={styles.textInfoCenter}>
                Задачи по римскому праву
            </Text>
            <Text style={styles.textInfoCenterTheme}>
                Сложные, простые, составные вещи
            </Text>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 1 (облицовка)' onPress={goTask1}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 2 (камень)' onPress={goTask2}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 3 (раб)' onPress={goTask1}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 4 (украли дилдо)' onPress={goTask1}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 5 (бык умер)' onPress={goTask1}/>
            </View>

            <Text style={styles.textInfoCenterTheme}>
             Виндикация
            </Text>

            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 6 (сгорел корабль)' onPress={goTask1}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 7 (молния в дом)' onPress={goTask1}/>
            </View>
            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 8 (раба ранили)' onPress={goTask1}/>
            </View>

            <Text style={styles.textInfoCenterTheme}>
               Кража
            </Text>

            <View style={styles.thirdButton}>
                <Button color={THEME.MAIN_COLOR} title='Задача 9 (украли раба)' onPress={goTask1}/>
            </View>


        </View>
    );
};

Home.navigationOptions = {
    headerTitle: 'Главная страница'
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
    },
    secondButton: {
        marginTop: 5,
        marginBottom: 5,
    },
    buttonInfo: {
        marginLeft: 10,
        marginRight: 10,
    },
    textInfoWrapper: {

        marginRight: 10,
        marginBottom: 5,
    },
    thirdButton: {
        marginBottom: 7
    },
    textInfoCenter: {
        fontSize: 22,
        marginTop: 6,
        marginBottom: 8,
        marginLeft: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInfoCenterTheme: {
        fontSize: 19,
        marginTop: 3,
        marginBottom: 8,
        marginLeft: 10,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    textInfo: {
        fontSize: 19,
        marginTop: 6,
        marginBottom: 8,
        marginLeft: 10,
    },
    textTask: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 7,
        marginBottom: 7,
        flex: 1,
        textAlign: 'center'
    },
    textQuestion: {
        fontWeight: 'bold'
    }
})

export default Home;
