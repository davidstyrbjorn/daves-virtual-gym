import { atom, RecoilState } from "recoil";
import { loadExercises } from "../json/load_exercises";
import { Exercise } from "../types/types";

// State where we store all our exercises, initially load the predefined and persitently saved exercises
export const exercisesState: RecoilState<Array<Exercise>> = atom({
    key: "exercises",
    default: loadExercises()
})