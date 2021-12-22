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

export type Session = {
    current_exercise_index: number;
    selected_exercises: number[]
}