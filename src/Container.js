import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
            { id: 1, title: "Appels", amount:0 },
            { id: 2, title: "kiwi", amount:0 }
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
      
     //const x = {...item,amount:item.amount +=1}
     
      this.setState(prevState => {
        console.log(prevState)
        const x = prevState.shoppingListItems.indexOf(item) === -1 ? {...item,amount:item.amount + 1} : this.state.shoppingListItems
        console.log([x])
       return {
         
        shoppingListItems :prevState.shoppingListItems.indexOf(item) === -1 ? {...item,amount:item.amount + 1} : this.state.shoppingListItems
       } 
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
    console.log(this.state.shoppingListItems)
    return (
     
      <div>
          <GroceryList  groceryItems={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} setValue={this.setValue} addItem={this.addItem} value={this.state.value} />
          <ShoppingCart groceryItems={this.state.shoppingListItems} emptyCart={this.emptyCart}/>
      </div>
    )
  }
}

export default Container
