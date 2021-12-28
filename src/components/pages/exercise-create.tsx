import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { CheckBox, Input, Text } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { backgroundColors } from "../../styles/colors";
import { textStyle } from "../../styles/text-style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import NormalButton from "../atoms/button";
import { addExercise } from "../../json/json-logger";
import { Exercise, ExerciseTypes } from "../../types/types";

const ExerciseCreate : React.FC<{}> = () => {
    const [exerciseName, setExerciseName] = useState<string>('');
    const [exerciseDescription, setExerciseDecription] = useState<string>('');
    const [isBodyWeight, setIsBodyWeight] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    const tabToType = {0: 'push', 1: 'pull', 2: 'legs'};

    const onAddExercise = () => {
        // Create exercise from provided data
        const exercise: Exercise = {
            name: exerciseName,
            description: exerciseDescription,
            muscle_groups: [],
            type: tabToType[0] as ExerciseTypes
        };
        addExercise(exercise);
    }

    // Returns the selection element for push/pull/legs
    const getTabSelection = () => {
        /* Tab options */
        const options = [
            <TouchableHighlight 
                style={[styles.tabContainer, selectedTab == 0 ? styles.tabContainerActive : styles.tabContainerDisabled]} 
                key={0}
                onPress={() => {setSelectedTab(0)}}
            >
                <Text style={[textStyle('white', 16).text, styles.tabText]}>Push</Text>
            </TouchableHighlight>,
            
            <TouchableHighlight 
                style={[styles.tabContainer, selectedTab == 1 ? styles.tabContainerActive : styles.tabContainerDisabled]} 
                key={1}
                onPress={() => {setSelectedTab(1)}}
            >
                <Text style={[textStyle('white', 16).text, styles.tabText]}>Pull</Text>
            </TouchableHighlight>,

            <TouchableHighlight 
                style={[styles.tabContainer, selectedTab == 2 ? styles.tabContainerActive : styles.tabContainerDisabled]} 
                key={2}
                onPress={() => {setSelectedTab(2)}}
            >
                <Text style={[textStyle('white', 16).text, styles.tabText]}>Legs</Text>
            </TouchableHighlight>
        ]

        return(
            <View style={styles.tabSection}>
                {options}
            </View>
        );
    }

    return (
        <LinearGradient colors={[backgroundColors['blue2'], backgroundColors['blue1']]} style={styles.linearGradient}>
            <Text style={[styles.headerText, textStyle('white', 32).text]}>
                Dave's Gym
            </Text>

            {/* A bunch of input related components */}
            <View style={styles.contentContainer}>
                <Text style={[textStyle('dark-gray', 16).text, styles.centeredText]}>Övningsnamn</Text>
                <Input
                    inputContainerStyle={styles.input}
                    placeholder='Ett fett namn'
                    autoCompleteType={undefined}  
                    onChangeText={setExerciseName}
                    value={exerciseName}
                    leftIcon={
                        <Icon name="copyright" size={20} color='gray' />
                    } 
                />
                <Text style={[textStyle('dark-gray', 16).text, styles.centeredText]}>Beskrivning</Text>
                <Input
                    inputContainerStyle={styles.input}
                    placeholder='Tight jävla beskrivning'
                    autoCompleteType={undefined}  
                    onChangeText={setExerciseDecription}
                    value={exerciseDescription}
                    leftIcon={
                        <Icon name="copyright" size={20} color='gray' />
                    } 
                />
                {/* <Text style={[textStyle('dark-gray', 16).text, styles.centeredText]}>Muskelgrupper (separera med komma)</Text> */}
                {/* <Input
                    inputContainerStyle={styles.input}
                    placeholder='chest, shoulders'
                    autoCompleteType={undefined}  
                    onChangeText={setExerciseDecription}
                    value={exerciseDescription}
                    leftIcon={
                        <Icon name="copyright" size={20} color='gray' />
                    } 
                /> */}
                <CheckBox
                    containerStyle={styles.checkBoxContainer}
                    style={styles.checkBoxContainer}
                    textStyle={textStyle('white').text}
                    title="Kroppsvikt"
                    checked={isBodyWeight}
                    onPress={() => setIsBodyWeight(!isBodyWeight)}
                />
                {getTabSelection()}
            </View>

            {/* ADD BUTTON */}
            <View style={{flexGrow: 1}}/>
            <View style={styles.createButton}>
                <NormalButton 
                    buttonColor1="green1" buttonColor2="green2" width="65%" height={50} textColor="white" title="Skapa" padding={0} borderRadius={10}
                    onPress={onAddExercise}
                />
            </View>
            <View style={{flexGrow: 1}}/>

        </LinearGradient>            
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 32,
    },
    createButton: {
        justifyContent: 'flex-end'
    },
    contentContainer: {
        paddingHorizontal: 16,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 8,
        margin: 0
    },
    centeredText: {
        textAlign: 'center',
        paddingBottom: 6
    },
    checkBoxContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 0,
        borderWidth: 0,
        padding: 0
    },
    tabSection: {
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        paddingHorizontal: 30,
        height: 40,
    },
    tabContainer: {
        flex: 1,
    },
    tabText: {
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center'
    },
    tabTextActive: {
        
    },
    tabTextDisabled: {
        
    },
    tabContainerActive: {
        backgroundColor: 'rgba(0, 0, 200, 1)',
    },
    tabContainerDisabled: {
        backgroundColor: 'rgba(0, 0, 200, 0.4)',
    }
});

export default ExerciseCreate;