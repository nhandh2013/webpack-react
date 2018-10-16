import React, { Component} from 'react';
import ListItem from './ListItem';
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      listItem: [
        {
          name: 'nhan 1',
          done: false
        },
        {
          name: 'teo',
          done: false
        },
        {
          name: 'ti',
          done: true
        },
        {
          name: 'nhan',
          done: false
        }
      ]   
    };
  }
  getValue(e) {
    this.setState({val: e.target.value})
  }
  handleAdd() {
    const ar = [...this.state.listItem];
    ar.push({
      name: this.state.val,
      done: false
    });
    this.setState({listItem: ar})
  }
  handleChecked(item) {
    const ar = [...this.state.listItem];
    const b = ar.filter((it)=> {
      if(it.name === item.name) {
        it.done = !it.done;
      } 
      return it;
    });
    this.setState({listItem: b});
  }
  render () {
    return (
      <div>
        <div className="add">
          <input type="text" name="text" onChange={this.getValue.bind(this)} />
          <button type="button" name="add" onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
        <div className="listToDo">
          <div className="header">
            <div>Name</div>
            <div>Checked?</div>
          </div>
          <div className="body">
            <ListItem data={this.state.listItem} handleChecked={this.handleChecked.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList;