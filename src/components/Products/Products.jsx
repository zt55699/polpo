import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
// import Stickers from '../../pictures/stickers.jpg';

import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Stickers', description: 'mini note Polpo stickers of 4', price: '$4', image: "./pictures/stickers.jpg"},
//     {id: 2, name: 'Galaxy Gummy Bear Polpo Charm', description: 'Galaxy Gummy Bear Polpo Charm, Acrylic Charms ,The Polar Bear', price: '$7', image: "./pictures/charm.jpg"},
//     {id: 3, name: 'Gummy Bear Magnets', description: 'Gummy Bear Magnets, Gummy Polpo', price: '$6.5', image: "./pictures/GummyMagnets.jpg"},
//     {id: 4, name: 'Polpo Acrylic Pin', description: 'Dango Polar Bear Polpo Acrylic Pin, Three Colour Dango,', price: '$7', image: "./pictures/PolpoAcrylicPin.jpg"}
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    const pathname = window.location.pathname
    console.log('Current directory: ' + pathname);
    return (
        <main className={classes.content}>
            <Grid container justify = "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;