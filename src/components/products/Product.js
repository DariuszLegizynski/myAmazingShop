import React from "react";

const Product = ({title, subtitle, description, imageOne}) => {
    return (
        <div className="products__text">
            <h2 className="products__text__h2 h2">
                {title}
            </h2>
            <h3 className="products__text__h3 h3">
                {subtitle}
            </h3>
            <p className="products__text__p p">
                {description}
            </p>
            <div className="products__text__images">
                <img src={imageOne} alt="first product" />
            </div>
        </div>
    )
}

export default Product;