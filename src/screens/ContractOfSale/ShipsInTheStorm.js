import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";

const ShipsInTheStorm = () => {
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
                Гай заключил с Титом договор купли-продажи. Тит должен был передать в собственность Гаю 5 кораблей. Эти корабли находились на момент заключения договора в гавани Египта. На пути из гавани во время сильного шторма они затонули. Покупатель заявил, что он не будет платить продавцу деньги, пока не получит товар. Продавец решил предъявить иск покупателю.
            </Text>
            <Text style={styles.textQuestion}>
                Как следует решить дело?
            </Text>
        </View>

                {!answer &&
                <View>
                    <CButton onPress={() =>  answerFunction(true)} title='Тит прав, надо платить'/>
                    <CButton onPress={() =>  answerFunction(false)} title='Гай прав, не надо платить'/>
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
            </ScrollView>
        </SafeAreaView>
    )
};

ShipsInTheStorm.navigationOptions = {
    headerTitle: 'Корабли в шторме'
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

export default ShipsInTheStorm;
