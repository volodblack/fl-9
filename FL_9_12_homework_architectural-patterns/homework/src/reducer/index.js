import {usersData} from '../utils';
import {LOAD_MORE, REMOVE, SEARCH} from '../actions';

const defaultState = usersData.showByDefault();
const defaultAction = {type: 'DEFAULT'};

export const reducer = (state = defaultState, action = defaultAction) => {
    switch (action.type) {
    case LOAD_MORE: {
        return [...state, ...action.value];
    }
    case REMOVE: {
        usersData.removeUser(action.value);
        state = state.filter((user) => user.id !== action.value);
        return state;
    }
    case SEARCH: {
        return state.filter((user) => user.name.indexOf(action.value) !== -1);
    }
    }
    return state;
};