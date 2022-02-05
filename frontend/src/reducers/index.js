import {combineReducers} from 'redux';

/*
var brazil= ["brazil"]
var spanish= ["spanish"]
var english= ["english"]
*/

function titleReducer( state = "", action){
     switch(action.type){
        case "brazil": return "brazil";  
        case "spanish": return "spanish";  
        case "english": return "english";
        default: return state;
     }
    
}

const reducers = combineReducers({titleReducer});

export default reducers;


/*
        
*/