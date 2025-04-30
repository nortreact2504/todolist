import { useState } from "react"

function AddTodo({addNewTodo}) {
    const [name, setName] = useState('Sid')
    const [unit, setUnit] = useState('')

    const addClicked = () => {
        console.log(name, unit)
        addNewTodo({name, unit})
        setName('')
        setUnit('')
    }

    return (
        <div className="row">
            <input 
                className="col-8" 
                placeholder="name"  
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input 
                className="col-2" 
                placeholder="unit" 
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
            />
            <button
                className="col-2 btn btn-link"
                onClick={addClicked}
            >
                Lisa
            </button>
        </div>
    )
}

export default AddTodo
