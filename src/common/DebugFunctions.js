import { DEBUG_MODE } from './Constants';

export function printDebug(message){
    if(DEBUG_MODE) {
        console.log(message);
    }
}

export function printError(message) {
    if(DEBUG_MODE) {
        console.error(message);
    }
}