import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if (action.payload === 'up') {
                newState = newState.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            } else if (action.payload === 'down') {
                newState = newState.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
            }
            return newState // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
