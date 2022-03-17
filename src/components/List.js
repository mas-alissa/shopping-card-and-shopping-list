import React from 'react'
import ListItem from './ListItem'
class List extends React.Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
            { id: 1, title: "Appels" },
            { id: 2, title: "kiwi" }
        ]
        }
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(item){
        console.log(item.id,item.title)
    }
  render() {
    return (
      <ul>
          {this.state.groceryItems.map(item => <ListItem key={item.id}  item={item} clickItem={this.onItemClick} />)}
      </ul>
    )
  }
}


export default List