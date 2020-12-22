import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import GoodCharacteristic from "../../common/good-characteristics/good-characteristics";
import Button from "../../common/button/button";

import "./good__info.scss";

const GoodInfo = ({ good, account, addToCart }) => {
  const { img, description, name, price, oldPrice } = good;
  return (
    <section className="good-info">
      <Image className="good__image" src={img} alt={name} width="550px" />
      <article className="good-info__main">
        <h1 className="hidden">{name}</h1>
        <div className="name">{name}</div>
        <div className="buy">
          <PriceOldPrice price={price} oldPrice={oldPrice} />
          {account.login ? (
            <Button onClick={() => addToCart(account.id, good)}>
              Добавить в корзину
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <DividerGray />
        <GoodCharacteristic description={description} />
      </article>
    </section>
  );
};
export default GoodInfo;
