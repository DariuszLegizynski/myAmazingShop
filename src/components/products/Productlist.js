import React, {useEffect, useState} from 'react';
import { db } from "../../firebase/firebase";

import Product from './Product';

import _ from "lodash";

const Productlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // snapshot - to check, if there is a change (like a new entry) in the database
        db.collection("products").onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => doc.data()))
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
            {showData()}
        </section>
    )
}

export default Productlist;
