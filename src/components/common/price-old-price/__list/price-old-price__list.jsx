import React from "react";
import PropTypes from "prop-types";

import "./price-old-price__list.scss";

const PriceOldPriceList = ({ price, oldPrice }) => {
  return (
    <div className="price-old-price__list">
      <div className="price">{`${price} руб`}</div>
      <div className="oldPrice">{`${oldPrice} руб`}</div>
    </div>
  );
};

PriceOldPriceList.proptypes = {
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
};

export default PriceOldPriceList;
