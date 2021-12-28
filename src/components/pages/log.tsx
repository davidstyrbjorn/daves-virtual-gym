import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { formatDateToKey, getTodaysDateStringFormattedAsKey } from '../../service/string_formatter';
import { backgroundColors } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { RootStackParamList } from '../../types/props';
import Incremeneter from '../molecules/incrementer';
import ShowSetsForDay from '../molecules/show-sets-for-day';

type Props = NativeStackScreenProps<RootStackParamList, 'Log'>;

const Log : React.FC<Props> = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        console.log(date.getDay());
    }, [date])

    const key = formatDateToKey(date);
    return (
        <LinearGradient colors={[backgroundColors['lilac1'], backgroundColors['lilac2']]} style={styles.gradient}>
            <Text style={[styles.headerText, textStyle('white', 32).text]}>
                LogN
            </Text>
            <View>
            <Incremeneter value={key} description='Dag' 
                onValueDecrease={() => {
                    let nextDay = new Date(date.getTime() - 86400000);
                    setDate(nextDay)
                }}
                onValueIncrease={() => {
                    let nextDay = new Date(date.getTime() + 86400000);
                    setDate(nextDay)
                }}
            />
            </View>
            <View style={styles.setContainer}>
                <View style={styles.content}>
                    <ShowSetsForDay date_key={key} />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 24,
    },
    setContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingTop: 32,
        borderRadius: 8
    }
});

export default Log;