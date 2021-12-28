import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { backgroundColors } from '../../styles/colors';
import { textStyle } from '../../styles/text-style';
import { RootStackParamList } from '../../types/props';
import NormalButton from '../atoms/button';

type Props = NativeStackScreenProps<RootStackParamList, 'PostExercise'>;

const PostExercise : React.FC<Props> = (props) => {
    return (
        <LinearGradient colors={[backgroundColors['lilac1'], backgroundColors['lilac2']]} style={styles.linearGradient}>
            <Text style={[textStyle('white', 32).text, styles.text]}>
                Fett du är klar med alla övningar! Så jävla lätt
            </Text>
            <Text style={[textStyle('dark-gray', 16).text, styles.text]}>
                All data är sparad LoggN! 
            </Text>
            <NormalButton 
                buttonColor1="green1" buttonColor2="green2" width="60%" height={60} textColor="white" title="Hem" padding={0} borderRadius={10}
                onPress={() => {
                    props.navigation.popToTop()
                }}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
});

export default PostExercise;