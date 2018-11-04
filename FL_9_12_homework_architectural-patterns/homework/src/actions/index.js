const LOAD_MORE = 'LOAD_MORE';
const REMOVE = 'REMOVE';
const SEARCH = 'SEARCH';

const newAction = (type, value) => {
    return {
        type: type,
        value: value,
    };
};

export {LOAD_MORE, REMOVE, SEARCH, newAction};