import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CheckBox, Input, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRecoilState } from 'recoil';
import { exercisesState, sessionState } from '../../recoil/atoms';
import { backgroundColors, selectedExercise } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { RootStackParamList } from '../../types/props';
import NormalButton from '../atoms/button';
import ExerciseCard from '../molecules/exercise-card';

type Props = NativeStackScreenProps<RootStackParamList, 'ExerciseSetup'>;

const ExerciseSetup : React.FC<Props> = ({navigation}: Props) => {
    const [session, setSession] = useRecoilState(sessionState);
    const [exercises, setExercises] = useRecoilState(exercisesState)
    const [filterValue, setFilterValue] = useState('');
    // These two local state will change the recoil state upon confirmation!
    const [shuffleOrder, setShuffleOrder] = useState(false);
    const [takeTime, setTakeTime] = useState(false);
    
    const confirmWorkout = () => {
        if(session.selected_exercises_indices.length === 0){
            return;
            // TODO: Tell the user we have no exercises selected!
        }
        // Do we shuffle the array?
        const array = {...session}.selected_exercises_indices;
        if(shuffleOrder){
            array.sort(() => (Math.random() > .5 ? 1 : -1)); // Shuffle the array
        }

        // Update the recoil state
        setSession({...session, shuffle_order: shuffleOrder, take_time: takeTime, selected_exercises_indices: array});
        // Navigate to the exercise session screen where we do our actual workout
        navigation.popToTop();
        navigation.navigate("ExerciseSession")
    }

    return (
        <LinearGradient colors={[backgroundColors['blue2'], backgroundColors['blue1']]} style={styles.linearGradient}>
            <Text style={[styles.headerText, textStyle('white', 38).text]}>
                Välj övningar
            </Text>
            <Text style={styles.headerText}>
                <Text style={textStyle('white').text}>Valda övningar markeras med en </Text>
                <Text style={[textStyle('black').text, {color: selectedExercise}]}>grön </Text>
                <Text style={textStyle('white').text}>färg!</Text>
            </Text>

            <View style={styles.contentContainer}>
                {/* TEXT INPUT FOR FILTERING EXERCISES */}
                <View style={styles.inputContainer}>
                    <Input
                        inputContainerStyle={styles.input}
                        placeholder='Sök övningar'
                        autoCompleteType={undefined}  
                        onChangeText={setFilterValue}
                        value={filterValue}
                        leftIcon={
                            <Icon name="search" size={20} color='gray' />
                        } 
                    />
                    <View style={styles.checkBoxView}>
                        <CheckBox
                            containerStyle={styles.checkBoxContainer}
                            style={styles.checkBoxContainer}
                            textStyle={textStyle('white').text}
                            title="Slumpa ordningen?"
                            checked={shuffleOrder}
                            onPress={() => setShuffleOrder(!shuffleOrder)}
                        />
                        <CheckBox
                            containerStyle={styles.checkBoxContainer}
                            activeOpacity={1}
                            textStyle={textStyle('white').text}
                            title="Ta tid?"
                            checked={takeTime}
                            onPress={() => setTakeTime(!takeTime)}
                        />
                    </View>
                </View>

                <NormalButton 
                    buttonColor1="green1" buttonColor2='green2' width="65%" height={80} textColor="white" title="Jag har valt klart" padding={6} borderRadius={16}
                    onPress={() => {
                        confirmWorkout()
                    }}
                />

                {/* LIST ALL EXERCISES TO CHOOSE FROM */}
                <FlatList 
                    data={exercises.filter((value) => value.name.toLowerCase().includes(filterValue.toLowerCase()))} 
                    renderItem={(data) => <ExerciseCard exercise={data.item} index={exercises.indexOf(data.item)} />}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    contentContainer: {
        flex: 1, // Needed to make FlatList scrollable
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8
    },
    inputContainer: {
        paddingHorizontal: 32,
        display: 'flex',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 8
    },
    checkBoxView: {
        flexDirection: 'row'
    },
    checkBoxContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 0,
        borderWidth: 0,
        padding: 0
    }
});

export default ExerciseSetup;