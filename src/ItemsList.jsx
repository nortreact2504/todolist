function ItemsList({items, toggleDone, deleteItem}) {

    return (
        <div>
            {
                items.map((item) => (
                    <div className="row mt-1" key={item.id}>
                        <input 
                            onChange={() => toggleDone(item.id)}
                            className="col-2" 
                            type="checkbox" 
                            checked={item.isDone} 
                        />
                        <div className="col-6">{item.name}</div>
                        <div className="col-2">{item.unit}</div>
                        <div onClick={() => deleteItem(item.id)} className="col-2">X</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsList;