import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers (
    {
        // state name: reducer that will control it
        todosState : todosReducer,
        filterState : filterReducer,
         // ASYNC Example (LOGIN USER)
        userState: userReducer
        //...add more states and reducers to include them in the store
    }
)


