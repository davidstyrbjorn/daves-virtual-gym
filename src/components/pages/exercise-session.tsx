import React, { useState } from 'react'
import { StyleSheet, View } from "react-native"
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { exercisesState, recordedSetState, sessionState } from '../../recoil/atoms';
import { backgroundColors } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { Exercise, LoggedData, Set } from '../../types/types';
import NormalButton from '../atoms/button';
import Incremeneter from '../molecules/incrementer';
import { getData, storeData } from '../../json/json-logger';
import { RootStackParamList } from '../../types/props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getTodaysDateStringFormattedAsKey } from '../../service/string_formatter';
import { useLinkProps } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'ExerciseSession'>;

const ExerciseSession : React.FC<Props> = ({navigation}: Props) => {
    const [rData, setRData] = useRecoilState(recordedSetState);
    const [exercises, setExercises] = useRecoilState(exercisesState)
    const [session, setSession] = useRecoilState(sessionState);
    const sessionReset = useResetRecoilState(sessionState); // Used to reset to default

    const [cachedRecordedData, setCachedRecordedData] = useState<Set[]>([]); // Local react state for cached set data
    const [msgToUser, setMsgToUser] = useState("");

    // Grab the current exercise
    const currentExercise: Exercise = exercises[session.selected_exercises_indices[session.current_exercise_index]];

    const logSet = () => {
        // cache the set, we actually log it when we move to next exercise
        setCachedRecordedData([...cachedRecordedData, {...rData, exercise_name: currentExercise.name} ]);
        setMsgToUser("Förra set: " + rData.reps + " reps " + rData.kg + "kg");
    }

    const nextExercise = async () => {
        // get yyyy-mm-dd as key into our async storage
        const key: string = getTodaysDateStringFormattedAsKey();
        let previousData = await getData(key); // get persitent data
        
        // Is this the first data we're logging for this day?
        if(previousData === null) previousData = { sets: []};
        
        // Take the cached sets and insert into the log for this exercise
        cachedRecordedData.forEach((setData: Set) => {
            previousData!.sets.push(setData); 
        });

        // Actually store the new data 
        storeData(key, previousData);

        // Reset some states
        setRData({...rData, kg: 0, reps: 0});
        setCachedRecordedData([]);
        
        // Check if we're on the last exercise
        if(session.current_exercise_index == session.selected_exercises_indices.length-1){
            // Go-to post exercise
            navigation.navigate('PostExercise');
            return;
        }
        
        // Update recoil-state + the local cached state
        setSession({...session, current_exercise_index: session.current_exercise_index+1});
    }

    // Sent to the incrementer
    const incrementerKgCallback = (x: number) => {
        setRData({...rData, kg: x});
    }

    // Reset recoil session state + navigate back to home screen
    const cancelWorkout = () => {
        sessionReset();
        navigation.popToTop();
    }

    const getCurrentExerciseContainer = () => {
        return (
            <View style={styles.currentExerciseContainer}>
                <View style={styles.currentExerciseBackground}>

                    {/* EXERCISE NAME */}
                    <Text style={[textStyle('white', 24).text, styles.exerciseName]}>{currentExercise.name}</Text>

                    <View style={styles.incrementerContainer}>
                        {/* KILOGRAM INCREMENTER */}
                        <View style={{paddingVertical: 12}}>
                            <Incremeneter value={rData.kg.toString()} description='Kilogram' numericalInput={true} setValueCallback={incrementerKgCallback}
                                onValueDecrease={() => {setRData({...rData, kg: Math.max(0, rData.kg-2.5)})}} 
                                onValueIncrease={() => {setRData({...rData, kg: rData.kg+2.5})}}
                            />
                        </View>
                        {/* REPS INCREMENTER */}
                        <View style={{paddingVertical: 12}}>
                            <Incremeneter value={rData.reps.toString()} description='Reps' 
                                onValueDecrease={() => {setRData({...rData, reps: Math.max(0, rData.reps-1)})}} 
                                onValueIncrease={() => {setRData({...rData, reps: rData.reps+1})}}
                            />
                        </View>
                    </View>
                    <NormalButton 
                        buttonColor1='blue1' buttonColor2="blue2" width="80%" height={80} textColor="white" title="Klicka här för att logga set" padding={0} borderRadius={10}
                        onPress={logSet}
                    />
                </View>
                {/* BOTTOM BLACK PART */}
                <View style={styles.currentExerciseBottom}>
                    <Text style={[textStyle('white', 16).text, styles.currentExerciseBottomText]}>
                        {msgToUser}
                    </Text>
                </View>

                <NormalButton 
                    buttonColor1="green1" buttonColor2="green2" width="65%" height={50} textColor="white" title="Nästa" padding={0} borderRadius={10}
                    onPress={nextExercise}
                />    
                <NormalButton 
                    buttonColor1="red1" buttonColor2="red2" width="65%" height={50} textColor="white" title="Avbryt Träning" padding={0} borderRadius={10}
                    onPress={cancelWorkout}
                />           

            </View>
        );
    }

    return (
        <LinearGradient colors={[backgroundColors['lilac1'], backgroundColors['lilac2']]} style={styles.linearGradient}>
            <Text style={[styles.headerText, textStyle('white', 38).text]}>
                Träning igång
            </Text>
            {/* CURRENT EXERCISE CONTAINER */}
            {getCurrentExerciseContainer()} 
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8
    },
    currentExerciseContainer: {
        width: "100%",
        height: "80%",
        marginTop: 8,
        marginBottom: 100,
    },
    currentExerciseBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "75%",
        height: "100%",
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    exerciseName: {
        textAlign: 'center',
        paddingTop: 8
    },
    incrementerContainer: {
        alignContent: 'center',
        width: "100%",
    },
    currentExerciseBottom: {
        backgroundColor: 'black',
        width: "75%",
        height: 70,
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
        alignSelf: 'center',
    },
    currentExerciseBottomText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop: 8
    }
});

export default ExerciseSession;