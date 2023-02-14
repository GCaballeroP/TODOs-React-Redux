//  Incremental ID for Todos

/**
 * @param {string} text
 * @returns action ADD_TODO
 */

let nextTodoID = 1;

export const ADD_TODO ='ADD_TODO';
export const TOGGLE_TODO ='TOGGLE_TODO';
export const SET_VISIBILITY_FILTER ='SET_VISIBILITY_FILTER'

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload : {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * @param {number} id
 * @returns action TOGGLE_TODO
 */

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload : {
            id
        }
    }
}

/**
 * @param {string} id
 * @returns action SET_VISIBILITY_FILTER
 */

export const SETVISIBILITYFILTER = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload : {
            filter
        }
    }
}