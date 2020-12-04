import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    return (
        <section className="shop">
            <p>
                You are in the shop now
            </p>
            <Link to={"/"}>
                <h3 className="h3">
                    BACK
                </h3>
            </Link>
        </section>
    )
}

export default Shop;