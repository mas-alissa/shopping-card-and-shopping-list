import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
            { id: 1, title: "Appels" },
            { id: 2, title: "kiwi" }
        ],
        shoppingListItems:[],
        value : "",
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.setValue = this.setValue.bind(this)
        this.addItem = this.addItem.bind(this)
    }   
    handleClickGroceryItem(item){
      this.setState({
        shoppingListItems : this.state.shoppingListItems.concat(item)
      })
    }
    emptyCart(){
      this.setState({
        shoppingListItems : []
      })
    }
    
    setValue(text){
      this.setState({
        value:text
      })
    }

    addItem(){
      const obj = {id:this.state.groceryItems.length + 1, title:this.state.value}
      if(this.state.value === ""){
        alert("You must put something in the text field!!")
      } else {
        this.setState({
          groceryItems:this.state.groceryItems.concat(obj),
          value:""
        })
      }
    }
   

  render() {
    
   
    return (
     
      <div>
          <GroceryList  groceryItems={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} setValue={this.setValue} addItem={this.addItem} value={this.state.value} />
          <ShoppingCart groceryItems={this.state.shoppingListItems} emptyCart={this.emptyCart}/>
      </div>
    )
  }
}

export default Container
