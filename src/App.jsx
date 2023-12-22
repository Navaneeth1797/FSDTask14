import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  //  Sample data for the product cards

  let cardData = [
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$50.00",
      productPrice2: "$25.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$75.00",
      productPrice2: "$35.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$40.00",
      productPrice2: "$16.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$50.00",
      productPrice2: "$25.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$60.00",
      productPrice2: "$30.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$80.00",
      productPrice2: "$40.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$50.00",
      productPrice2: "$25.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$15.00",
      productPrice2: "$85.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Sale Item",
      productPrice1: "$50.00",
      productPrice2: "$25.00",
    },
    {
      saleBadge: "Sale",
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      productPrice1: "$10.00",
      productPrice2: "$90.00",
    },
  ];

  // State to track the number of items added or removed from the cart

  let [addremoveCart, setaddremoveCart] = useState(0);
  return (
    <>
      
      {/* Topbar component */}

      <Topbar
        addremoveCart={addremoveCart}
        setaddremoveCart={setaddremoveCart}
      />

      {/* Header component */}

      <Header />

      {/* Product card section */}

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {/* Map through cardData to create individual Card components */}

            {cardData.map((element, index) => {
              return (
                <Card
                  cardData={element}
                  key={index}
                  addremoveCart={addremoveCart}
                  setaddremoveCart={setaddremoveCart}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer component */}

      <Footer />
      
    </>
  );
}

export default App;
