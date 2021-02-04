import React, {useState} from "react";
import {View, Text, StyleSheet, Button,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import { THEME } from '../../theme'

const Task2 = () => {
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
                Трём братьям достался по наследству драгоценный камень. Они пожелали разделить наследство. Один из них потребовал распилить большой камень на маленькие. Правомерно ли требование?
                <Text style={styles.textQuestion}>
                    Что должен решить претор?
                </Text>
            </Text>

            {!answer &&
            <View>
                <Button color={THEME.FIRST_BUTTON_COLOR} title='Прав первый брат, не делим' onPress={trueAnswerFunction}/>
            <View style={styles.secondButton}>
            <Button  color={THEME.SECOND_BUTTON_COLOR} title='Прав второй брат, делим' onPress={falseAnswerFunction}/>
            </View>
            </View>
            }

            {answer && <View style={styles.center}>
                {answerBool ? <Text style={styles.textInfo}>
                    Решение правильное, молодец. Камень - простая вещь, её нельзя делить, он если будет разделён, уже не будет представлять такой ценности, как целый
                </Text> : <Text style={styles.textInfo}>
                    Решение неправильное... Камень - простая вещь, её нельзя делить, он если будет разделён, уже не будет представлять такой ценности, как целый

                </Text>}

            </View>}
            <View style={styles.thirdButton}>
            <Button  color={THEME.THIRD_BUTTON_COLOR} title={openHelp ? 'Закрыть подсказку' : 'Посмотреть подсказку'} onPress={openHelpFunction}/>
            </View>
            {openHelp && <View style={styles.textInfoWrapper}>
                <Text style={styles.textInfo}>
                   Можно ли разделить раба?
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

Task2.navigationOptions = {
    headerTitle: 'Задача 2 (камень)'
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

export default Task2;
