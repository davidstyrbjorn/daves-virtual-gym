import React, { useEffect } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useRecoilState } from 'recoil';
import { sessionState } from '../../recoil/atoms';
import { selectedExercise } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { Exercise } from '../../types/types';

type Props = {
    exercise: Exercise;
    index: number;
}

const ExerciseCard : React.FC<Props> = ({ exercise, index } : Props) => {
    // This is where we store our session, keep it here so we don't have to re-render alot
    // since the only change to session we do is the selected_array on press
    const [session, setSession] = useRecoilState(sessionState);

    const onCardPress = () => {
        // Check if exercise already has been selected into the current session
        // We either add or remove, see function below
        if(session.selected_exercises.indexOf(index) !== -1) removeExercise();
        else addExercise();
    }

    const addExercise = () => {
        setSession({
            current_exercise_index: session.current_exercise_index,
            selected_exercises: [...session.selected_exercises, index]
        });
    }

    const removeExercise = () => {
        setSession({
            current_exercise_index: session.current_exercise_index,
            selected_exercises: session.selected_exercises.filter((value) => value !== index)
        })
    }

    const isSelected: boolean = session.selected_exercises.indexOf(index) !== -1;
    return (
        <List.Item title={exercise.name} description={exercise.description}
            left={() => <List.Icon icon="folder"/>} underlayColor='white' onPress={onCardPress}
        />
        // <TouchableHighlight onPress={onCardPress}> 
        //     {/* DOING THIS TO MAKE THE CARD TOUCHABLE */}
        //     <View style={[styles.container, {backgroundColor: isSelected ? selectedExercise : 'white'}]} >
        //         <View style={styles.icon}>
        //             {/* ICON HERE LATER */}
        //             <Text>{index}</Text>
        //         </View>
        //         <View>
        //             <Text style={textStyle('black', 16).text}>{exercise.name}</Text>
        //             <Text style={textStyle('dark-gray', 12).text}>{exercise.description}</Text>
        //         </View>
        //     </View>
        // </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'rgba(20, 20, 20, 0.8)'
    },
    exerciseNameText: {
    },
    exerciseSubText: {
    },
    icon: {
        justifyContent: 'center'
    }
});

export default ExerciseCard;