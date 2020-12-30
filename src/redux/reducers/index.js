import {combineReducers} from 'redux';
import {editorTypeReducer} from './editorType';

export const allReducer = combineReducers({
    editorType: editorTypeReducer
});


