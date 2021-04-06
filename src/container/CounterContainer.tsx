import { MouseEventHandler } from "react";
import { connect } from "react-redux";
import Counter from '../component/Counter';
import { increase, decrease } from "../modules/counter";
import { myNamespace } from 'myModule';

export const counterContainer = (props: { number: number, increase: MouseEventHandler<HTMLButtonElement>, decrease: MouseEventHandler<HTMLButtonElement>}) : JSX.Element=>{
    return (
        <>
            <Counter number={props.number} onIncrease={props.increase} onDecrease={props.decrease} />
        </>
    )
}

const mapStateToProps = ( state:myNamespace.objType) => ({
    number: state.counter.number
})

export default connect(mapStateToProps, { increase, decrease })(
    counterContainer
);