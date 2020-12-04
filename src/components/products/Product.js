import React from "react";

const Product = ({title, subtitle, description, imageOne}) => {
    return (
        <div className="products__text">
            <h3 className="products__text__h3 h3">
                {title}
            </h3>
            <h4 className="products__text__h4 h4">
                {subtitle}
            </h4>
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