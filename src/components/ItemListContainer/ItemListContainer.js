import React from 'react';
import PropTypes from 'prop-types';
import ItemCount from './ItemCount';

const ItemListContainer = ({ message }) => {

    const style = { // Estilo del mensaje.
        'textAlign': 'center',
        'backgroundColor': 'rgb(53, 51, 51)',
    }

    return (
        <main>
                <h2 style={style}>{message}</h2>
                <ItemCount />
        </main>
    )
}
ItemListContainer.propTypes = {
    message: PropTypes.string.isRequired,
}
ItemListContainer.defaultProps = {
    message: 'No hay mensaje para mostrar',
}
export default ItemListContainer;
