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
        shoppingListItems:[]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
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
  render() {
    console.log(this.state.shoppingListItems)
    return (
      <div>
          <GroceryList  groceryItems={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} />
          <ShoppingCart groceryItems={this.state.shoppingListItems} emptyCart={this.emptyCart}/>
      </div>
    )
  }
}

export default Container
