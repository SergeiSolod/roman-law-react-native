import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";
import CTextTask from "../../components/CTextTask";
import CTextQuestion from "../../components/CTextQuestion";

const PreciousStone = () => {
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
                <CTextTask text={'Трём братьям достался по наследству драгоценный камень. Они пожелали разделить наследство. Один из них потребовал распилить большой камень на маленькие.'}/>
                <CTextQuestion text={'Как следует решить дело?'}/>
                </View>
                {!answer &&
                <View>
                    <CButton onPress={() =>  answerFunction(false)} title='Можно распилить'/>
                    <CButton onPress={() =>  answerFunction(true)} title='Нельзя распилить'/>
                </View>
                }
                {answer && <View style={styles.center}>
                    <View>
                        {answerBool ?<Text style={styles.textInfoCorrectly}>Решение правильное.</Text> : <Text style={styles.textInfoWrong}>Решение неправильное. </Text>}
                            <Text style={styles.textInfo}>
                               В римском праве вещи также подразделяются на делимые и неделимые. К делимым относились вещи, которые при их разделении не меняли своей ценности (земельные участки, строения). Неделимые — вещи, которые материально разделить нельзя.
                            </Text>
                            <Text style={styles.textInfo}>
                                Разделение вещей на делимые и неделимые имело первостепенное значение, так как если право собственности на вещь принадлежало нескольким лицам и право собственности прекращалось, то делимые вещи распределялись в равных долях между собственниками, а если вещь была неделимой, то она оставалась в собственности одного лица, а другие получали денежную компенсацию;
                            </Text>
                            <Text style={styles.textInfo}>
                            Драгоценный камень - вещь неделимая, потому что при разделении он потеряет в стоимости, был один большой красивый драгоценный камень, а будет 3 обрубка, один камень большой будет стоить дороже.
                                 Другая ситуация была бы, если бы делили мешки пшеницы, 100 мешков пшеницы можно разделить как угодно, 50 на 50, 30 на 70 и так далее.
                            </Text>
                        <Text style={styles.textInfo}>
                        Но как решить задачу в конечном счёте? Нужно продать драгоценный камень
                        и полученные деньги разделить (деньги - вещь делимая), либо один из братьев забирает камень себе, а остальным платит деньги за их части.
                        </Text>
                        </View>
                </View>}
            </ScrollView>
        </SafeAreaView>
    )
};

PreciousStone.navigationOptions = {
    headerTitle: 'Драгоценный камень'
}

const styles = StyleSheet.create({
    textTaskWrapper: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 7,
        marginBottom: 7,
        flex: 1,
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

export default PreciousStone;
