import React from 'react'
import { hot } from 'react-hot-loader'
import Counters from './Counters'
import Navbar from "./Navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 5},
      { id: 3, value: 2},
      { id: 4, value: 12},
      { id: 5, value: 54},
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    counters[index].value < 0 ? counters[index].value = 0 : null
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })

    this.setState({counters})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default hot(module)(App)
