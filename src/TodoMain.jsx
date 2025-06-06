import { useState } from 'react'
import './App.css'
import ItemsList from './ItemsList'
import AddTodo from './AddTodo'
import { practice, asyncPractice } from './utils'

function TodoMain() {
  const [count, setCount] = useState(0)

  //practice()
  asyncPractice()

  const [items, setItems] = useState([
    { id: 1, name: 'Õun', isDone: false, unit: 'kg' },
    { id: 2, name: 'Banaan', isDone: false, unit: 'kg' },
    { id: 3, name: 'Pirn', isDone: false, unit: 'tk' },
    { id: 4, name: 'Merevaik', isDone: false, unit: 'tk' },
    { id: 5, name: 'Kohv', isDone: false, unit: 'tk' },
    { id: 6, name: 'Tee', isDone: false, unit: 'tk' },
    { id: 7, name: 'Suhkur', isDone: false, unit: 'tk' },
    { id: 8, name: 'Jahu', isDone: false, unit: 'tk' },
    { id: 9, name: 'Sool', isDone: false, unit: 'tk' },
    { id: 10, name: 'Pasta',isDone: false, unit: 'tk' }
  ])

  const toggleDone = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return item
    })
    setItems(newItems)
  }

  const addNewTodo = (newTodo) => {
    console.log(newTodo)
    const newItem = {
      id: items.length + 1,
      name: newTodo.name,
      isDone: false,
      unit: newTodo.unit
    }
    setItems([...items, newItem])
  }

  const deleteItem = (id) => {
    console.log(id)
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  return (
    <div className='container'>
      <h1>Minu ostukorv</h1>
      <AddTodo addNewTodo={addNewTodo} />
      <ItemsList items={items} toggleDone={toggleDone} deleteItem={deleteItem} />
    </div>
  )
}

export default TodoMain
