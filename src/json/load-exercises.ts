import { Exercise } from "../types/types";
import * as predefeined_exercises from './predefined_exercises.json';

export function loadExercises(): Array<Exercise> {
    let data: Array<Exercise> = []; // Return data

    // Load the default exercises from a json file
    predefeined_exercises.exercises.forEach((e: any) => {
        data.push({name: e.name, muscle_groups: e.muscle_groups, type: e.type, description: e.description});
    });
 
    return data; // Done!
}