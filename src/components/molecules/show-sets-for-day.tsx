import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Settings, StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { getData } from '../../json/json-logger';
import { textStyle } from '../../styles/text-style';
import { LoggedData, Set } from '../../types/types';

type Props = {
    date_key: string;
}

const ShowSetsForDay: React.FC<Props> = (props) => {
    const [loggedData, setLoggedData] = useState<LoggedData | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLoggedData();
    }, [props.date_key]);

    // Get the logged data from storage
    const getLoggedData = async ()  => {
        setLoading(true);
        const data = await getData(props.date_key);
        setLoggedData(data);
        setLoading(false);
    }

    const getSetEntry = (set: Set, index: number) => {
        return( 
            <>
                <View style={styles.setContainer}>
                    <Text style={[textStyle('white', 20).text]}>{index+1}. {set.exercise_name}</Text>   
                    <Text style={textStyle('dark-gray', 14).text}>{set.reps} reps med {set.kg}kg</Text>
                </View>
                <Divider/>
            </> 
        );
    }   

    /* RETUR SOME DATA */
    if(loading) return <ActivityIndicator/>
    if(!loading && loggedData == null) return <Text>Du har ingen träningsdata för denna dag!</Text>
    return (
        <View style={styles.container}>
            <FlatList
                data={loggedData!.sets}
                renderItem={(data) => getSetEntry(data.item, data.index)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    setContainer: {
        paddingVertical: 6
    },
});

export default ShowSetsForDay;