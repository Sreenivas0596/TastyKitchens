import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.onDecrement}
          testid="decrement-count"
        >
          -
        </button>
        <div testid="active-count">0</div>
        <button
          type="button"
          onClick={this.onIncrement}
          testid="increment-count"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
