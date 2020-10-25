import { types } from "../types/types";

const initialState = {
    darkMode: true, 
}

export const styleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.uiSetStyleMode:
            return{
                darkMode: !state.darkMode
            }
           
        default:
            return state;
    }
}