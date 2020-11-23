import { Component } from 'react';

import Input from './Input';
import Item from './Item';
import Header from './Header';

import './normalize.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      list: []
    }
  }
  onChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  }
  onKeyPress = ({key}) => {
    if(key==='Enter') {
      this.addItem();
    }
  }
  addItem = () => {
    if(this.state.inputText.length > 0) {
      this.setState((state) => {
        const list = [...state.list, {id: new Date(), text: state.inputText, isCompleted: false}];
        return {list, inputText: ''};
      });
    }
  }
  deleteItem = ({key}) => {
    this.setState((state) => {
      const list = state.list.filter(({id})=>{
        return id !== key;
      })
      return list;
    });
  }
  render() {

    const { inputText, list } = this.state;

    return (
      <div className="App">
        <div className='todo'>
          <Header title='Список задач' />
          <Input onKeyPress={this.onKeyPress} addItem={this.addItem} value={inputText} onChange={this.onChange} />
          {list.map(({ id, text, isCompleted }) => 
          <Item 
          id={id} 
          text={text} 
          isCompleted={isCompleted}
          delete={this.deleteItem}
           />)}
        </div>
      </div>
    );
  }
}

export default App;
