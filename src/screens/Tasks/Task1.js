import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'


const Task1 =() =>  {
    const [answer, changeAnswer] = useState(false);
    function trueAnswer() {
        changeAnswer(true)
    }
    function falseAnswer() {
        changeAnswer(false)
    }
    return (
        <View style={styles.center}>
            <Text>
                Зей, передавая Гаю дом во исполнение купли-продажи, приказал снять дорогую мраморную облицовку полов, мотивируя тем, что при заключении договора речь шла о доме, а об облицовке дома ничего не сказано. Что должен решить суд?
            </Text>
            <Text>
                Что должен решить претор?
            </Text>
            <Button title='Зей прав, снимаем облицовку'    onPress={trueAnswer}/>
            <Button title='Гай прав, облицовку не снимаем'    onPress={falseAnswer}/>
            {answer && <View style={styles.center}>
                <Text>
                    Решение неправильное... Прав Гай, потому что это сложная вещь
                </Text>
            </View> }
        </View>
    )
};

Task1.navigationOptions = {
    headerTitle: 'Tasks page'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Task1;
