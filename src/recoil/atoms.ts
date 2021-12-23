import { atom, RecoilState, selector } from "recoil";
import { loadExercises } from "../json/load-exercises";
import { Exercise, Session } from "../types/types";

// State where we store all our exercises, initially load the predefined and persitently saved exercises
export const exercisesState: RecoilState<Array<Exercise>> = atom({
    key: "exercises",
    default: loadExercises()
})

export const sessionState: RecoilState<Session> = atom({
    key: 'session',
    default: {
        current_exercise_index: 0,
        selected_exercises: [] as number[],
        shuffle_order: false as boolean,
        take_time: false as boolean
    }
})