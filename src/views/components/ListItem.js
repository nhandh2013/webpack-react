import React, { Component } from 'react';
class ListItem extends Component {
  delete(item) {
    this.props.handleChecked(item);
  }
  render() {
    return (
      <div>
        {
          this.props.data && this.props.data.map((item, key) => {
            return (
              <div className="item" key={key}>
                <div>{item.name}</div>
                <div><input type="checkbox" name={`name-${key}`} defaultChecked={item.done} onClick={this.delete.bind(this, item)}/></div>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default ListItem;