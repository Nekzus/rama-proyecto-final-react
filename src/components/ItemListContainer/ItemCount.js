import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ItemCount = ({stock = 15}) => {

    const [count, setCount] = useState(1);
    if(count <= stock && count >=1){
    const btnIncrease = () => setCount(count + 1)
    const btnDecrease = () => setCount(count - 1)
    
    return (
        <div>
            <h2>{count}</h2>
            <button className="btn btn-decrease btn-dark"onClick={btnDecrease}>-</button>
            <button className="btn btn-increase btn-dark"onClick={btnIncrease}>+</button>
            <button className="btn btn-add btn-dark">Agregar al carrito</button>
        </div>
    )
}
}

ItemCount.propTypes = {
    value: PropTypes.number,
    stock: PropTypes.number,
}

export default ItemCount

