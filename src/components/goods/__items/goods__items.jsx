import React from "react";
import GoodItemContainer from "../../../components/good-item/good-item-container";
import { Link } from "react-router-dom";

import "./goods__items.scss";

const GoodsItems = ({ items = [] }) => {
  return (
    <section className="goods__items">
      {items.map((e) => (
        <GoodItemContainer key={e.id} {...e} />
      ))}
    </section>
  );
};

export default GoodsItems;
