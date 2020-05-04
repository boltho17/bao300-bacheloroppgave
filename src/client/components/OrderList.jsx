import React from 'react';

const OrderList = () => {
  return (
    <>
      <div className="orderlist order">
        <div className="order-item">

          <p className="order-item-text">
            <span className="orderNumber">Ordrenummer</span>
            Produkt(er)
            <span className="quantity">
              Antall
            </span>
            <span className="weight">
              Vekt
            </span>
            <span className="sku">
              (SKU)
            </span>
            <span className="product-name">
              Produktnavn
            </span>

          </p>
          <button className="btn approve btn-success btn-sm">
            Godkjenn
          </button>
          <button className="btn cancel btn-danger btn-sm">
            Kansellér
          </button>
          {/* Expand */}
          <button className="btn expand btn-outline-info btn-sm">
            + Utvid
          </button>
        </div>
      </div>

    </>
  );
};

export default OrderList;