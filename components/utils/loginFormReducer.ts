type ReducerAction = {
    type: 'updateAccount' | 'handleError' | 'handleLoginFormState',
    payload: any
}

export const loginFormReducer = (
    state: any,
    action: ReducerAction,
    e: Event & { target: HTMLButtonElement | HTMLInputElement }
) => {
    switch (action.type) {
        case 'updateAccount':
            return {
                ...state,
                [e.target.id]: action.payload
            };
        case 'handleError':
            return {
                ...state,
                [e.target.id]: action.payload
            };
        case 'handleLoginFormState':
            return {
                ...state,
                [e.target.id]: action.payload
            };
        default:
            throw new Error('ERROR IN REDUCER');
    }
};