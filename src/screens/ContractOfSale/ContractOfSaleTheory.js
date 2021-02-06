import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import CTextTheory from "../../components/CTextTheory";

const ContractOfSaleTheory = () => {
    const theory = [
        'Договор купли-продажи (emptio-venditio) — договор, в силу которого одна сторона (продавец) была обязана предоставить другой стороне (покупателю) вещь (товар) в собственность, а покупатель был обязан уплатить продавцу установленную договором денежную цену',
        'Договор купли-продажи был направлен на переход права собственности и владения от одного лица к другому на возмездной основе.',
        'Договор купли-продажи — консенсуальный договор, заключался посредством простого соглашения.',
        'Существенные условия договора купли-продажи — предмет договора и цена.',
        'Предмет договора купли-продажи — вещь как телесная (например, дом), так и нематериальная (например, право требования), но не изъятая из оборота. Предметом договора могли быть вещи как уже существующие в натуре, так и те, которые появятся или поступят в собственность продавца в будущем (договоры под отлагательным условием, т. е. обязательство возникало не с момента заключения договора, а с момента наступления обстоятельств, оговоренных сторонами договора, например созревание урожая).',
        'Случаи предоставления вещи:',
        '— продавец был собственником вещи — и покупатель становился собственником этой вещи;',
        '— продавец не был собственником — и покупатель не становился собственником вещи, а собственник мог виндицировать вещь.',
        'Признаки цены:',
        '— денежное выражение (in pecunia numerata);',
        '— определенность (certum) — обе стороны правильно оценивали размер цены и были согласны с ней;',
        '— реальность (verum) — цена должна была соответствовать обычной стоимости аналогичного товара, обращающегося на рынке.',
        'Обязанности продавца:',
        '— передать покупателю товар, свободный от прав любых третьих лиц;',
        '— предоставить товар надлежащего качества либо предупредить покупателя об имеющихся недостатках вещи;',
        '— передать проданную вещь с принадлежностями и плодами, полученными после заключения договора.',
        'Обязанности покупателя:',
        '— принять поставленный ему товар;',
        '— своевременно оплатить поставленный ему товар. Риск случайной гибели проданного товара лежал на покупателе.',
        'Ответственность продавца:',
        '— за эвикцию вещи. Эвикция вещи — лишение покупателя права собственности на вещь, полученную от продавца, вследствие отсуждения ее третьим лицом на основании права, возникшего до передачи вещи покупателю. Продавец не отвечал за эвикцию, если покупатель знал о правах эвикцирующего в момент заключения договора. При эвикции продавец обязан был вступить в дело на стороне покупателя и защитить его, если это не удавалось, он был обязан уплатить покупателю двойную стоимость отсужденного или возместить ему понесенные убытки;',
        '— за ненадлежащее качество поставленного товара. По цивильному праву продавец нес ответственность только, когда он обещал покупателю, что вещь не имеет недостатков, в классическую и постклассическую эпоху — если продавец не знал и не мог знать о недостатках. В случае приобретения некачественного товара покупатель был вправе предъявить иск о расторжении договора и возврате уплаченной цены (actio redhibitoria) или иск об уменьшении покупной цены (actio quanti minoris).',
        'Ответственность покупателя:',
        '— за неоплату приобретенного им товара продавец взыскивал с покупателя стоимость проданной вещи и проценты за просрочку.',
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.textInfoWrapper}>
                    <CTextTheory theory={theory}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

ContractOfSaleTheory.navigationOptions = {
    headerTitle: 'Теория: купля-продажа'
}

const styles = StyleSheet.create({
    textInfoWrapper: {
        marginTop: 13,
        marginRight: 10,
        marginBottom: 8,
    },
})

export default ContractOfSaleTheory;
