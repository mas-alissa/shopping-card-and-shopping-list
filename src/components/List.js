import ListItem from "./ListItem"

function List(props) {
  return (
     <ul>
       {props.groceryItems.map((item,index) => <ListItem key={index} item={item} handleClickGroceryItem={props.handleClickGroceryItem} />)}
     </ul>
      
  )
}

export default List