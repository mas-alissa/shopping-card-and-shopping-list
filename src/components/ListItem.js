
function ListItem({item,handleClickGroceryItem}) {
  return (
   <>
     {handleClickGroceryItem ? <li
   key={item.id}
   className="list-item"
   onClick={() => handleClickGroceryItem(item)}
   value={item.title}
   >{item.title}</li> : <li key={item.id}
   className="list-item-1"
   value={item.title}>{item.title}</li>}
   </>
  )
}

export default ListItem