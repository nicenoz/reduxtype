import { myModule } from 'myModule';

export const INCREASE: string = "counter/INCREASE";
export const DECREASE: string = "counter/DECREASE";

export const increase = () : myModule.actionType => ({ type: INCREASE});
export const decrease = () : myModule.actionType => ({ type: DECREASE});

export const initialState:myModule.initialType = { number: 0, age: 1};
export default function counter(state:myModule.initialType = initialState, action: myModule.actionType){

    switch(action.type){
        case INCREASE:
            return {...state, number: state.number+1};
        case DECREASE:
            return {...state, number: state.number-1};
        default: return state;
    }
}