import React, { MouseEventHandler } from 'react';

function Counter(props:{ number:number, onIncrease:MouseEventHandler<HTMLButtonElement>, onDecrease:MouseEventHandler<HTMLButtonElement>}):JSX.Element {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncrease}> +1 </button>
            <button onClick={props.onDecrease}> -1 </button>
        </div>
    );
}

export default Counter;