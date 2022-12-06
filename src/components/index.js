import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const Url = 'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

class Count extends Component {
  state = {userInput: '', data: []}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput !== '') {
      const latestData = {
        id: uuidv4(),
        userInput,
      }
      this.setState(prevState => ({
        data: [...prevState.data, latestData],
        userInput: '',
      }))
    }
  }

  renderResults = () => {
    const {data} = this.state
    return (
      <ul className="list-outputs">
        {data.map(eachItem => (
          <li key={eachItem.id}>
            <p className="outpt-counts">
              {eachItem.userInput}: {eachItem.userInput.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, data} = this.state
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="title">
            Count the characters like a <br />
            Boss...
          </h1>
          {data.length === 0 ? (
            <img src={Url} alt="no user inputs" className="image" />
          ) : (
            this.renderResults()
          )}
        </div>
        <div className="input-container">
          <h1 className="character-counter">Character Counter</h1>
          <form onSubmit={this.onSubmitAdd} className="userInput-container">
            <input
              type="text"
              onChange={this.onChangeInput}
              className="input"
              placeholder="Enter the Characters here"
              value={userInput}
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Count
