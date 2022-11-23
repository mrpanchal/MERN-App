import { createContext, useReducer } from 'react';

// 1) create context
export const WorkoutsContext = createContext();

// 4) Reducer creation
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

// 2) Context provider
export const WorkoutsContextProvider = ({ children }) => {
    // 3) use Reducer
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}