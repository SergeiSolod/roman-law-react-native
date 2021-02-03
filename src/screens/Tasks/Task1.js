import React, { Component }  from "react";
import {View, Text, StyleSheet, Button} from 'react-native'


class Task1 extends Component {
    trueAnswer() {
         alert('правильный ответ')
    }
    falseAnswer() {
            alert('неправильный ответ')
    }
    render() {
    return (
        <View style={styles.center}>
            <Text>
                Зей, передавая Гаю дом во исполнение купли-продажи, приказал снять дорогую мраморную облицовку полов, мотивируя тем, что при заключении договора речь шла о доме, а об облицовке дома ничего не сказано. Что должен решить суд?
            </Text>
            <Text>
                Что должен решить претор?
            </Text>
            <Button title='Зей прав, снимаем облицовку'    onPress={this.trueAnswer}/>
            <Button title='Гай прав, облицовку не снимаем'    onPress={this.falseAnswer}/>
        </View>
    )
}
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
