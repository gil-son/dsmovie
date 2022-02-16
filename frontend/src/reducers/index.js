import {combineReducers} from 'redux';

function titleReducer( state = "", action){
     switch(action.type){
        case "brazil": return "brazil";  
        case "spanish": return "spanish";  
        case "english": return "english";
        case "japan": return "japan";
        default: return state;
     }
    
}

const reducers = combineReducers({titleReducer});

export default reducers;