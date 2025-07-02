const initState = {
    themeId: 1 as ThemeIdType,
}

export type ThemeIdType = 1 | 2 | 3

type ThemeStateType = {
    themeId: ThemeIdType
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: ThemeIdType
}

type ActionType = ChangeThemeIdType

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return  {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: ThemeIdType): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any
