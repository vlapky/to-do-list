import { Component } from 'react'

import Input from '../components/Input'
import Item from '../components/Item'
import Header from '../components/Header'

import '../styles/normalize.css'
import '../styles/App.css'
import { connect } from 'react-redux'

import { AddTask, RemoveTask, ChangeFlag } from '../redux/actionCreator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  clearInput = () => {
    this.setState({ inputText: '' })
  }

  render() {
    const { inputText } = this.state
    const { AddTask, RemoveTask, ChangeFlag, tasks } = this.props
    console.log(AddTask, RemoveTask, ChangeFlag, tasks)

    return (
      <div className="App">
        <div className="todo">
          <Header title="Список задач" />
          <Input
            onChange={this.onChange}
            value={inputText}
            addItem={() => {
              AddTask(inputText)
              this.clearInput()
            }}
          />
          {tasks.map(({ text, flag }, index) => (
            <Item
              key={index}
              text={text}
              isCompleted={flag}
              deleteTask={() => RemoveTask(index)}
              changeFlag={() => ChangeFlag(index)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ tasks }) => ({
    tasks, // это место
  }),
  {
    AddTask,
    RemoveTask,
    ChangeFlag,
  }
)(App)
