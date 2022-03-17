import React from 'react'
import ListItem from './ListItem'
class List extends React.Component {
  render() {
    return (
      <ul>
          <ListItem name="Apple" />
          <ListItem name="Kiwi" />
      </ul>
    )
  }
}


export default List