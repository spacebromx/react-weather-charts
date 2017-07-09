import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            /*
                Concatenates action.payload.data, to the previous state object.
                Note that a new object is being returned and the original state
                remains as it is (immutable).
            */
            return [action.payload.data, ...state];
    }
    return state;
}
