import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./good-info/good-info";

import "./good.scss";

const Good = (props) => {
  return (
    <div className="good">
      <div className="wrapper">
        <GoodInfo {...props} />
      </div>
    </div>
  );
};

Good.proptypes = {
  props: PropTypes.exact({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
  }).isRequired
};

export default Good;
