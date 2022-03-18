import List from "./List";

export default function GroceryList(props) {
  return (
   
        <List handleClickGroceryItem={props.handleClickGroceryItem} groceryItems={props.groceryItems}/>
    
  )
}
