import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div>
        {
          this.props.data && this.props.data.map((item, key) => {
            return (
              <div className="item" key={key}>
                <div>{item.name}</div>
                <div><input type="checkbox" name={`name-${key}`} checked={item.done}/></div>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default ListItem;