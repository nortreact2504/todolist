import { useEffect, useState } from 'react'
import './App.css'
import ItemsList from './ItemsList'
import AddTodo from './AddTodo'
import { practice, asyncPractice } from './utils'
import { fetchTodoData, postTodoData } from './utils'

function TodoMain() {
  const [count, setCount] = useState(0)

  //practice()
  asyncPractice()

  const [items, setItems] = useState([])

  useEffect(()=> {
    const fetching = async () => {
      const newData = await fetchTodoData()
      console.log(newData)
      setItems(() => newData)
    }
    fetching()
  }, [])

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
    postTodoData({name: newItem.name, priority: newItem.unit})
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
