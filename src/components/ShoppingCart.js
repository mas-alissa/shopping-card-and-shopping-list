import List from "./List";

export default function ShoppingCart(props) {
  return (
    <>
    {props.groceryItems.length > 0 && <button onClick={props.emptyCart}>Empty Cart</button>}
    <List groceryItems={props.groceryItems}/>
    </>
   
  )
}
