import { connect } from "react-redux";
import Counter from '../component/Counter';
import { increase, decrease } from "../modules/counter";

type objType = {
    counter: {
        number: number
    },
}
export const counterContainer = (props: { number: number, increase: object, decrease: object}) : JSX.Element=>{
    return (
        <>
            <Counter number={props.number} onIncrease={props.increase} onDecrease={props.decrease} />
        </>
    )
}

const mapStateToProps = ( state:objType) => ({
    number: state.counter.number
})

export default connect(mapStateToProps, { increase, decrease })(
    counterContainer
);