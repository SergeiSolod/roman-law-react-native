import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";

const BurntNecklace = (props) => {

    const [openTheory, changeOpenTheory] = useState(false);
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
                    <Text style={styles.textTask}>
                        Из предоставленного заказчиком материала ювелир сделал ожерелье. Ночью от удара молнии в его доме случился сильный пожар, после тушения которого обнаружилось, что в огне изделие ювелира вернулось к исходному состоянию слитка металла. Заказчик отказался оплатить работу и потребовал вернуть ему металл.                   </Text>
                    <Text style={styles.textQuestion}>
                        Как следует решить дело?
                    </Text>
                </View>

                {!answer &&
                <View>
                    <CButton onPress={() =>  answerFunction(false)} title='Зей прав, снимаем облицовку'/>
                    <CButton onPress={() =>  answerFunction(true)} title='Гай прав, облицовку не снимаем'/>
                </View>
                }

                {answer && <View style={styles.center}>
                    <View>
                        {answerBool ?<Text style={styles.textInfoCorrectly}>Решение правильное.</Text> : <Text style={styles.textInfoWrong}>Решение неправильное. </Text>}
                        <Text style={styles.textInfo}>
                            В теории ниже сказано, какие бывают виды вещей в римском праве. Дом - это собирательная вещь,
                            облицовка - это часть дома, если продаётся дом, то продаётся и облицовка в том числе, потому что это часть дома, как, например,
                            стена, крыша дома, нельзя продать дом, не продав крышу, потому что она часть дома, она и есть дом, поэтому Гай прав.
                            Другое дело, если бы речь шла, например, о сундуке. Сундук - вещь самостоятельная, отдельная,
                            он не является частью дома, его требовать нельзя.</Text>
                    </View>
                </View>}

                {openTheory ?   <CButton onPress={() =>  changeOpenTheory(false)} title='Закрыть теорию'/>
                    : <CButton onPress={() =>  changeOpenTheory(true)} title='Открыть теорию'/> }

                {openTheory && <View style={styles.textInfoWrapper}>
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
            </ScrollView>
        </SafeAreaView>
    )
};

BurntNecklace.navigationOptions = {
    headerTitle: 'Сгоревшее ожерелье'
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
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 8,
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
        marginBottom: 13,
        marginLeft: 10,
    },
    boldText: {
        fontWeight: 'bold'
    },
})

export default BurntNecklace;