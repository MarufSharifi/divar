

const initialState = [];


const ThingsReducer = (state = initialState, action) => {


        switch(action.type) {

            case "ADD_THING":

                return [...state, action.value];

            default: return state;
        }
}


export default ThingsReducer;