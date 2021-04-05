import { connect } from "react-redux";
import Counter from '../component/Counter';
import { increase, decrease } from "../modules/counter";
export const counterContainer = (props: { number: number, increase: any, decrease: any}) : JSX.Element=>{
    return (
        <>
            <Counter number={props.number} onIncrease={props.increase} onDecrease={props.decrease} />
        </>
    )
}

const mapStateToProps = (state:any) => ({
    number: state.counter.number
})

export default connect(mapStateToProps, { increase, decrease })(
    counterContainer
);