function ItemsList({items}) {
    return (
        <div>
            {
                items.map((item) => (
                    <div className="row mt-1" key={item.id}>
                        <input className="col-2" type="checkbox" checked={item.isDone} />
                        <div className="col-8">{item.name}</div>
                        <div className="col-2">{item.unit}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsList;