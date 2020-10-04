import { createStore } from 'redux'

const reducer = (state = 0, action) {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;
        default:
            return state;
    }
}

const inc = () => {type: 'INC'}
const dec = () => {type: 'DEC'}
const rnd = () => {type: 'RND'}

const store = createStore(reducer);

