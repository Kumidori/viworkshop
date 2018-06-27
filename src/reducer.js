export function loading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return true;
        case 'LOADED':
            return false
        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'GET_USERS':
            return action.users;
        default:
            return state;
    }
}
