import React from 'react'
import Counter from "./Counter";
import PropTypes from "prop-types";


class Counters extends React.Component {
    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props
         return (
             <div>
                 <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                 { counters.map(counter => <Counter
                     key={counter.id}
                     onIncrement={onIncrement}
                     onDelete={onDelete}
                     counter={counter}
                     onDecrement={onDecrement}
                     >
                 </Counter>
                 )}

             </div>
         )
    }
}

Counters.propTypes = {
    onReset: PropTypes.func.isRequired,
    counters: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counters
