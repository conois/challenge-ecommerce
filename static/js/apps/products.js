import React, { Component } from 'react';
import { catalog } from './../../../data/mock.json';

const Products = ({name, imageURL, currency, price } ) => catalog.map((data) =>
    <div>
        <img src={data.imageURL} alt= {data.name}/>
        <p> {data.name} </p>
        <p> {data.currency} {data.price} </p>
        <button>Add To Cart</button>
    </div>);

export default Products;