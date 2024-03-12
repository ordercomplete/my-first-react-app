import React from "react";
import "./Product.css";

export function Product({ product }) {
  if (!product.inStock) {
    return (
      <span className="product-details__stock product-details__stock--unavailable">
        Цей продукт зараз відсутній в наявності.
      </span>
    );
  }

  // const stock = (
  //   <span
  //     className={`product-details__stock ${
  //       product.inStock
  //         ? "product-details__stock--available"
  //         : "product-details__stock--unavailable"
  //     }`}
  //   >
  //     {product.inStock
  //       ? "Цей продукт є в наявності."
  //       : "Цей продукт зараз відсутній в наявності."}
  //   </span>
  // );

  return (
    <div className="product-details">
      <span className="product-details__name">{product.name}</span>
      {/* {stock} */}
      <span className="product-details__price">
        Ціна: ${product.price || "Ціна не доступна."}
      </span>
    </div>
  );
}
