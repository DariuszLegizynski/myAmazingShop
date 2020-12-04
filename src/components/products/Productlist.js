import React, { useContext, useEffect, useState } from 'react';
import { db } from "../../firebase/firebase";

import Product from './Product';

import ProductsContext from "../../context/products/productsContext";

import _ from "lodash";

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const {showProduct} = useContext(ProductsContext);

    useEffect(() => {
        // snapshot - to check, if there is a change (like a new entry) in the database
        db.collection("products").onSnapshot(snapshot => {
            showProduct(snapshot.docs.map(doc => doc.data()))
        })
        
    }, []);

    const showData = () => {
        if (!_.isEmpty(products)) {
            return products.map(el => {
                return (
                    <React.Fragment>
                        <Product title={el.title} subtitle={el.subtitle} description={el.description} imageOne={el.thumbnailImageOne}/>
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <section className="products">
            <h2 className="products_h2 h2">
                Our Poducts
            </h2>
            {showData()}
        </section>
    )
}

export default Productlist;
