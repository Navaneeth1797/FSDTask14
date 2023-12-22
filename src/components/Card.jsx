import React, { useState } from "react";

function Card({ addremoveCart, setaddremoveCart, cardData }) {

  // State to track whether the item is added to the cart or not

  let [toggle, settoggle] = useState(true);
  return (
      <div className="col mb-5">
      <div className="card h-100">
              
        {/* <!-- Sale badge--> */}

        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: " 0.5rem" }}
        >
          {cardData.productName}
        </div>

        {/* <!-- Product image--> */}

        <img className="card-img-top" src={cardData.productImage} alt="..." />

        {/* <!-- Product details--> */}

        <div className="card-body p-4">
        <div className="text-center">
                      
            {/* <!-- Product name--> */}

            <h5 className="fw-bolder">{cardData.productName}</h5>

            {/* <!-- Product price--> */}

            <span className="text-muted text-decoration-line-through">
              {cardData.productPrice1}
            </span>
            {cardData.productPrice2}
          </div>
        </div>

        {/* <!-- Product actions--> */}

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
                      
            {/* Add to cart or Remove from cart button based on toggle state */}

            {toggle ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                    
                  // Increase the cart count and set toggle to false

                  setaddremoveCart(addremoveCart + 1);
                  settoggle(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"                  onClick={() => {
                    
                  // Decrease the cart count and set toggle to true

                  setaddremoveCart(addremoveCart - 1);
                  settoggle(true);
                }}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
