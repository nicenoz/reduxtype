export const INCREASE: string = "counter/INCREASE";
export const DECREASE: string = "counter/DECREASE";

export const increase = () : object => ({ type: INCREASE});
export const decrease = () : object => ({ type: DECREASE});

type actionType = {type: string};
type initialType = {number: number, age: number};
export const initialState = { number: 0, age: 1};
export default function counter(state:initialType = initialState, action: actionType){

    switch(action.type){
        case INCREASE:
            return {...state, number: state.number+1};
        case DECREASE:
            return {...state, number: state.number-1};
        default: return state;
    }
}
