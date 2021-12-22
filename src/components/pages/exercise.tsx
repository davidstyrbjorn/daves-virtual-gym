import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { List, Searchbar, Text } from 'react-native-paper';
import { useRecoilState } from 'recoil';
import { exercisesState, sessionState } from '../../recoil/atoms';
import { backgroundColors, selectedExercise } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import ExerciseCard from '../molecules/exercise-card';

const ExerciseStart : React.FC<{}> = () => {
    const [exercises, setExercises] = useRecoilState(exercisesState)

    return (
        <LinearGradient colors={[backgroundColors['blue2'], backgroundColors['blue1']]} style={styles.linearGradient}>
            <Text style={[styles.headerText, textStyle('white', 32).text]}>
                Välj övningar
            </Text>
            <Text style={styles.headerText}>
                <Text style={textStyle('white').text}>Valda övningar markeras med en </Text>
                <Text style={[textStyle('black').text, {color: selectedExercise}]}>grön </Text>
                <Text style={textStyle('white').text}>färg!</Text>
            </Text>
            
            <Searchbar 
                placeholder='Sök Övningar'
                onChangeText={() => {}}
                value="Hej"
            />

            {/* LIST ALL EXERCISES TO CHOOSE FROM */}
            {/* <FlatList 
                data={exercises} 
                renderItem={(data) => <ExerciseCard exercise={data.item} index={data.index} />}
            /> */}
            <List.Section>
                {exercises.map((exercise, index) => {
                    console.log("TJA");
                    return <ExerciseCard key={index} exercise={exercise} index={index}/>
                })}
                <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
            </List.Section>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        padding: 32
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8
    }
});

export default ExerciseStart;