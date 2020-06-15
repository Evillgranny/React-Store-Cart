import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  render() {

    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
            onClick={ () => this.props.onIncrement(this.props.counter) }
            className="btn btn-secondary btn-sm"
        >
            inc
        </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
              delete
          </button>

          <button
              onClick={ () => this.props.onDecrement(this.props.counter) }
              className="btn btn-secondary btn-sm"
          >
              dec
          </button>

      </div>
    )
  }
}

Counter.propTypes = {
    onDelete: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
