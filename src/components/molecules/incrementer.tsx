import React from 'react';
import { StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { backgroundColors } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { IncrementerProps } from '../../types/props';

// Component used in the ExerciseSession component, re-used on different incrementable values like kg/reps etc

const Incremeneter : React.FC<IncrementerProps> = ({ 
    description, value, onValueIncrease, onValueDecrease, numericalInput, setValueCallback
 }: IncrementerProps) => {
    return (
        <View>
            <View style={styles.flexView}>
                <TouchableHighlight 
                    style={styles.circularButton} 
                    onPress={onValueDecrease}
                    >
                    <Text style={[textStyle('black', 15).text, styles.text]}>-</Text>
                </TouchableHighlight>
                
                <View style={styles.textContainer}>
                    {!numericalInput ? (
                        <Text style={[textStyle('white', 15).text, styles.text]}>
                            {value}
                        </Text> ) : (
                            <TextInput 
                                style={[textStyle('white', 15).text, styles.text]} 
                                value={value}
                                // This is buggy but i'm not sure how to do this much better for now
                                onChangeText={(s: string) => {
                                    if(s != "") setValueCallback!(parseInt(s));
                                }}
                                keyboardType="numeric"
                            />
                            )}
                    <Text style={[textStyle('dark-gray', 10).text, styles.descriptionText]}>
                        {description}
                    </Text>
                </View>

                <TouchableHighlight 
                    style={styles.circularButton} 
                    onPress={onValueIncrease}
                    >
                    <Text style={[textStyle('black', 15).text, styles.text]}>+</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textContainer: {
        width: 46,
        // backgroundColor: 'black'
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    circularButton: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: 'center'
    },
    descriptionText: {
        textAlign: 'center'
    },
    underlinedText: {
        borderColor: 'white',
        borderBottomWidth: 1,
    },

});

export default Incremeneter;