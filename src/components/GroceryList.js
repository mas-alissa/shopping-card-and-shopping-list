import InputField from "./InputField";
import List from "./List";

export default function GroceryList(props) {
  return (
   <>
   <InputField setValue={props.setValue} value={props.value}/>
   <button onClick={props.addItem}>Add</button>
    <List handleClickGroceryItem={props.handleClickGroceryItem} groceryItems={props.groceryItems}/>
   </>
    
  )
}
