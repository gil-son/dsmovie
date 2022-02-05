import {combineReducers} from 'redux';

var initialState = ["brazil","spanish","english"]

function titleReducer( state = initialState, action){
     switch(action.type){
        case "BRAZIL": return { titleObj: action.value};  
        case "SPANISH": return { titleObj: "spanish"};  
        default: return state;
    }
}



const reducers = combineReducers({titleReducer});

export default reducers;