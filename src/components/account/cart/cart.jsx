import React from "react";
import Button from "../../common/button/button";
import ExportToExcel from "../../common/ExportToExcel";
import GoodsItems from "../../goods/__items/goods__items";

const Cart = ({ items }) => {
  return (
    <main className="goods media1220">
      <GoodsItems items={items} />
      <ExportToExcel>выписать чек</ExportToExcel>
    </main>
  );
};

export default Cart;
