import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./props";

export type MuscleGroups = 
    | 'chest' | 'triceps' | 'shoulders' 
    | 'traps' | 'back' | 'hamstrings' | 'biceps'
    | 'quads' | 'gluteus'

export type ExerciseTypes = 
    | 'pull' | 'push' | 'legs';

export type Exercise = {
    name: string;
    muscle_groups: MuscleGroups;
    type: ExerciseTypes;
    description: string;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type ExerciseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Exercise'>;