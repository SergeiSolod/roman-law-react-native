import React, {useState} from "react";
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";
import CTextTask from "../../components/CTextTask";
import CTextQuestion from "../../components/CTextQuestion";
import CTrueFalse from "../../components/CTrueFalse";
import CTextTheory from "../../components/CTextTheory";

const BurnedOutShip = () => {
    const task = ['Зей, передавая Гаю дом во исполнение купли-продажи, приказал снять дорогую мраморную облицовку полов, мотивируя тем, что при заключении договора речь шла о доме, а об облицовке дома ничего не сказано.']
    const question = 'Как следует решить дело?'
    const firstAnswer = 'Зей прав, снимаем облицовку'
    const secondAnswer = 'Гай прав, облицовку не снимаем'
    const theory = ['В римском праве вещи бывают простые, сложные и составные.',
        'Простые вещи — образующие нечто физически связанное и однородное, не распадающееся на составные части (раб, бревно, камень и т. п.).',
        'Составные (сложные) вещи состоят из нескольких простых и (или) сложных вещей, материально соединенных между собой: строение, корабль, телега. Если простая вещь, которая имеет свой правовой режим, становится частью составной вещи, она подпадает под режим этой последней. Но если составная вещь распадается, выделившаяся из нее простая вещь возвращается к своему изначальному режиму (например, чужие материалы использованные для постройки на собственной земле).',
        'Собирательные вещи состоят из нескольких простых и (или) сложных вещей, соединенных между собой не материально, а лишь общим назначением: стадо овец, поместье (включающее земельный участок, все постройки на нем)',
        'Дом - это собирательная вещь, облицовка - это часть дома, если продаётся дом, то продаётся и облицовка в том числе, потому что это часть дома, как, например, стена, крыша дома, нельзя продать дом, не продав крышу, потому что она часть дома, она и есть дом, поэтому Гай прав. Другое дело, если бы речь шла, например, о сундуке. Сундук - вещь самостоятельная, отдельная, он не является частью дома, его требовать нельзя.'
    ]

    const [answer, changeAnswer] = useState(false);
    const [answerBool, changeAnswerBool] = useState(false);
    function answerFunction(bool) {
        changeAnswerBool(bool)
        changeAnswer(true)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.textTaskWrapper}>
                    <CTextTask text={task}/>
                    <CTextQuestion text={question}/>
                </View>
                {!answer &&
                <View>
                    <CButton onPress={() =>  answerFunction(false)} title={firstAnswer}/>
                    <CButton onPress={() =>  answerFunction(true)} title={secondAnswer}/>
                </View>
                }
                {answer && <View style={styles.center}>
                    <View>
                        <CTrueFalse answerBool={answerBool}/>
                        <CTextTheory theory={theory}/>
                    </View>
                </View>}
            </ScrollView>
        </SafeAreaView>
    )
};

BurnedOutShip.navigationOptions = {
    headerTitle: 'Сгоревший корабль'
}

const styles = StyleSheet.create({
    textTaskWrapper: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 7,
        marginBottom: 7,
        flex: 1,
    },
    textInfoWrapper: {
        marginRight: 10,
        marginBottom: 5,
    },
})

export default BurnedOutShip;
