import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ message }) => {

    //**PRODUCTOS HARDCODEADOS */
    const products = [

        {
            id: 1,
            stock: 15,
            plataforma: "XBOX ONE",
            categoria: "shooter",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_COD%20Modern%20Warfare.webp?alt=media&token=a733826f-03d4-41ea-a527-042d495c7175",
            precio: 7500,
            titulo: "CoD: Modern Warfare"
        },
        {
            id: 2,
            stock: 20,
            plataforma: "PS4",
            categoria: "accion",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_Hitman%203.webp?alt=media&token=96cd108b-9899-4341-86a7-49afa5d1007e",
            precio: 5246,
            titulo: "Hitman 3"
        },
        {
            id: 3,
            stock: 10,
            precio: 3500,
            categoria: "carreras",
            plataforma: "XBOX ONE",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_Forza%20Horizon%205.webp?alt=media&token=6b6b4a7e-d975-451d-ba3d-b8e07447a4ff",
            titulo: "Forza Horizon 5",
        },
        {
            id: 4,
            stock: 8,
            plataforma: "XBOX ONE",
            categoria: "accion",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_Grand%20Theft%20Auto%20V.webp?alt=media&token=165ae653-b97c-4917-9b20-15e07ef1b628",
            precio: 1200,
            titulo: "Grand Theft Auto V",
        },
        {
            id: 5,
            stock: 12,
            plataforma: "PC",
            categoria: "accion",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_Red%20Dead%20Redemption%202.webp?alt=media&token=e64d17e5-d821-4fba-ba65-16a7ee1d6d19",
            precio: 3200,
            titulo: "Red Dead Redemption 2",
        },
        {
            id: 6,
            stock: 9,
            plataforma: "PC",
            categoria: "aventura",
            portada: "https://firebasestorage.googleapis.com/v0/b/db-nekzusgamestore-js23175.appspot.com/o/Portada%20GameStore%2Fpda_Destiny%202.webp?alt=media&token=942c3a7b-9e06-48a2-a8af-fe72e666d97d",
            precio: 1950,
            titulo: "Destiny 2",
        }
    ];

    const style = { // Estilo del mensaje.
        'textAlign': 'center',
        'backgroundColor': 'rgb(53, 51, 51)',
    }

    return (
        <main>
            <div className='container'>
                <h2 style={style}>{message}</h2>
                <ItemList products={products} />
            </div>
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
