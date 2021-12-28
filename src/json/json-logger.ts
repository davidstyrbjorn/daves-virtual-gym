import AsyncStorage from '@react-native-async-storage/async-storage'
import { Exercise, LoggedData } from '../types/types';

// Key is exercise_name, logged_data is just the data for that exercise
async function storeData(key: string, value: LoggedData) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }catch(e) {
        console.error("storeData(): " + e);
    }
}

// Key is exercise_name
async function getData(key: string) : Promise<LoggedData | null> {
    try {
        const readValue = await AsyncStorage.getItem(key); // Read string value for key
        if(readValue == null) return null; // Returns null if nothing for key exists
        return JSON.parse(readValue) as LoggedData // Parse json string into LoggedData array and return
    }catch(e) {
        console.error("getData(): " + e);
    }

    return null;
}

async function addExercise(exercise: Exercise) : Promise<string> {
    try {
        const readValue = await AsyncStorage.getItem('user_exercises'); // Read from persitent storage
        let exercises: Exercise[] = [];
        if(readValue == null){
            // This is the first user exercise we're trying to add!
            exercises = [exercise];
            await AsyncStorage.setItem('user_exercises', JSON.stringify(exercises));
        }else{
            // This ain't the first, grab the ones we already have
            exercises = JSON.parse(readValue) as Exercise[];
            if(exercises.find((e) => e.name.toLocaleLowerCase() == exercise.name.toLocaleLowerCase())){
                return `Exercise with name: ${exercise.name} already exists!`;
            }
            exercises.push(exercise);
        }
        // Actually update the persitent storage
        await AsyncStorage.setItem('user_exercises', JSON.stringify(exercises));
        return 'Success!';
    } catch(e) {
        console.error("addExercise(): " + e);
    }

    return 'Something went wrong with the storage function! Maybe check app permissions';
}



export { storeData, getData, addExercise };