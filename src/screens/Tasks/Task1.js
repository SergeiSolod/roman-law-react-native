import React, {useState} from "react";
import {View, Text, StyleSheet, Button,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import { THEME } from '../../theme'

const Task1 = () => {
    const [answer, changeAnswer] = useState(false);
    const [answerBool, changeAnswerBool] = useState(false);
    const [openInfo, changeOpenInfo] = useState(false);
    const [openHelp, changeOpenHelp] = useState(false);

    function trueAnswerFunction() {
        changeAnswer(true)
        changeAnswerBool(true)
    }

    function falseAnswerFunction() {
        changeAnswer(false)
        changeAnswerBool(false)
    }

    function openInfoFunction() {
        if (openInfo) {
            changeOpenInfo(false)
        } else {
            changeOpenInfo(true)
        }
    }

    function openHelpFunction() {
        if (openHelp) {
            changeOpenHelp(false)
        } else {
            changeOpenHelp(true)
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
        <View style={styles.top}>
            <Text style={styles.textTask}>
                Зей, передавая Гаю дом во исполнение купли-продажи, приказал снять дорогую мраморную облицовку полов,
                мотивируя тем, что при заключении договора речь шла о доме, а об облицовке дома ничего не сказано.
                <Text style={styles.textQuestion}>
                    Что должен решить претор?
                </Text>
            </Text>

            {!answer &&
            <View>
                <Button color={THEME.FIRST_BUTTON_COLOR} title='Зей прав, снимаем облицовку' onPress={trueAnswerFunction}/>
            <View style={styles.secondButton}>
            <Button  color={THEME.SECOND_BUTTON_COLOR} title='Гай прав, облицовку не снимаем' onPress={falseAnswerFunction}/>
            </View>
            </View>
            }

            {answer && <View style={styles.center}>
                {answerBool ? <Text style={styles.textInfo}>
                    Решение правильное, молодец. Если ты прочитал теорию, то сразу понял, что дом - это собирательная вещь,
                     облицовка - это часть дома, если продаётся дом, то продаётся и облицовка в том числе, потому что это часть дома,
                    это и есть по сути дом, поэтому Гай конечно же прав. То же самое, если бы Зей сказал, что не передаст крышу
                    или стену, она видите ли дорогая. Другое дело, если бы речь шла, например, о сундуке. Сундук - вещь самостоятельная, отдельная,
                    он не является частью дома и его продают отдельно, его требовать нельзя.
                </Text> : <Text style={styles.textInfo}>
                    Решение неправильное... Если ты прочитал теорию, то сразу понял, что дом - это собирательная вещь,
                    облицовка - это часть дома, если продаётся дом, то продаётся и облицовка в том числе, потому что это часть дома,
                    это и есть по сути дом, поэтому Гай конечно же прав. То же самое, если бы Зей сказал, что не передаст крышу
                    или стену, она видите ли дорогая. Другое дело, если бы речь шла, например, о сундуке. Сундук - вещь самостоятельная, отдельная,
                    он не является частью дома и его продают отдельно, его требовать нельзя.
                </Text>}

            </View>}
            <View style={styles.thirdButton}>
            <Button  color={THEME.THIRD_BUTTON_COLOR} title={openHelp ? 'Закрыть подсказку' : 'Посмотреть подсказку'} onPress={openHelpFunction}/>
            </View>
            {openHelp && <View style={styles.textInfoWrapper}>
                <Text style={styles.textInfo}>
                   Я купил машину, должны ли мне передать колёса от машины? Ответ очевиден - да
                </Text>
            </View>}

            <Button  color={THEME.FOURTH_BUTTON_COLOR} title={openInfo ? 'Закрыть теорию' : 'Посмотреть теорию'} onPress={openInfoFunction}/>


            {openInfo && <View style={styles.textInfoWrapper}>
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
            </View>}
        </View>
            </ScrollView>
        </SafeAreaView>
    )
};

Task1.navigationOptions = {
    headerTitle: 'Задача 1 (облицовка)'
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
      marginBottom: 4
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

export default Task1;
