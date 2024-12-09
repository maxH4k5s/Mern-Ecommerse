// ProductCards.jsx
import React from "react";
import "./ProductCards.css";

// Example product data
const products = [
  {
    id: 1,
    imageUrl: "src/assets/products/product_01.webp",
    category: "Men",
    title: "100% Lines Mao Collar Shirt",
    price: 49.5,
    originalPrice: 55.99,
    ref: "REF.6701456-CHENNAI-LH",
    cartIcon: "src/assets/productCartIcon.svg",
  },
  {
    id: 2,
    imageUrl: "src/assets/products/product_02.webp",
    category: "Men",
    title: "Stylish Summer Dress",
    price: 29.99,
    originalPrice: 35.99,
    ref: "REF.9837452-DELHI-WH",
    cartIcon: "src/assets/productCartIcon.svg",
  },
  {
    id: 3,
    imageUrl: "src/assets/products/product_03.webp",
    category: "Women",
    title: "Stylish Summer Dress",
    price: 29.99,
    originalPrice: 35.99,
    ref: "REF.9837452-DELHI-WH",
    cartIcon: "src/assets/productCartIcon.svg",
  },
  {
    id: 4,
    imageUrl: "src/assets/products/product_04.webp",
    category: "Women",
    title: "Stylish Summer Dress",
    price: 29.99,
    originalPrice: 35.99,
    ref: "REF.9837452-DELHI-WH",
    cartIcon: "src/assets/productCartIcon.svg",
  },
  {
    id: 5,
    imageUrl: "src/assets/products/product_04.webp",
    category: "Women",
    title: "Stylish Summer Dress",
    price: 29.99,
    originalPrice: 35.99,
    ref: "REF.9837452-DELHI-WH",
    cartIcon: "src/assets/productCartIcon.svg",
  },
  // Add more products as needed
];

function ProductCards() {
  return (
    <div className="productCardsList">
      {products.map((product) => (
        <div className="productCards" key={product.id}>
          <div className="ProductImgb">
            <div className="addCollections">
              <span className="pluse">+</span>
            </div>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="imgResponsive"
            />
          </div>
          <div className="prodcutsDetails">
            <div className="cateName">
              <span>{product.category}</span>
            </div>
            <div className="titleBox">
              <img src={product.imageUrl} alt={product.title} />
              <div className="titleTxt">
                <h4>{product.title}</h4>
                <h5>
                  ${product.price} <del>${product.originalPrice}</del>
                </h5>
                <span>{product.ref}</span>
              </div>
            </div>
            <div className="productBtn">
              <button className="btn btn-primary">Buy now</button>
              <button className="btn btn-light">
                <img src={product.cartIcon} alt="Cart Icon" width={24} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
