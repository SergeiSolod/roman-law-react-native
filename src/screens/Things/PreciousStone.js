import React, {useState} from "react";
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import CButton from "../../components/CButton";
import CTextTask from "../../components/CTextTask";
import CTextQuestion from "../../components/CTextQuestion";
import CTrueFalse from "../../components/CTrueFalse";
import CTextTheory from "../../components/CTextTheory";

const PreciousStone = () => {
    const task = ['Трём братьям достался по наследству драгоценный камень. Они пожелали разделить наследство. Один из них потребовал распилить большой камень на маленькие.']
    const question = 'Как следует решить дело?'
    const firstAnswer = 'Можно распилить'
    const secondAnswer = 'Нельзя распилить'
    const theory = ['В римском праве вещи также подразделяются на делимые и неделимые. К делимым относились вещи, которые при их разделении не меняли своей ценности (земельные участки, строения). Неделимые — вещи, которые материально разделить нельзя.',
        'Разделение вещей на делимые и неделимые имело первостепенное значение, так как если право собственности на вещь принадлежало нескольким лицам и право собственности прекращалось, то делимые вещи распределялись в равных долях между собственниками, а если вещь была неделимой, то она оставалась в собственности одного лица, а другие получали денежную компенсацию;',
        'Драгоценный камень - вещь неделимая, потому что при разделении он потеряет в стоимости, был один большой красивый драгоценный камень, а будет 3 обрубка, один камень большой будет стоить дороже.\n' +
        'Другая ситуация была бы, если бы делили мешки пшеницы, 100 мешков пшеницы можно разделить как угодно, 50 на 50, 30 на 70 и так далее.',
        'Но как решить задачу в конечном счёте? Нужно продать драгоценный камень и полученные деньги разделить (деньги - вещь делимая), либо один из братьев забирает камень себе, а остальным платит деньги за их части.'
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
    textInfoWrapper: {
        marginRight: 10,
        marginBottom: 5,
    },
})

export default PreciousStone;
