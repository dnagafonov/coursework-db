import React from "react";
import ReactExport from "react-data-export";
import { connect } from "react-redux";
import Button from "./button/button";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportToExcel = ({ list, username }) => {
  const totalPrice = list.reduce((p, c) => p + +c.price, 0);
  const convertedList = list.map((e) => ({
    name: e.name,
    description: e.description,
    price: e.price,
  }));
  console.log(322343423);
  return (
    <ExcelFile
      element={<Button>Create report!</Button>}
    >
      <ExcelSheet data={convertedList} name="Checkout">
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Description" value="description" />
        <ExcelColumn label="Price" value="price" />
      </ExcelSheet>
      <ExcelSheet data={[{ username, totalPrice}]} name="Other">
        <ExcelColumn label="Username" value="username" />
        <ExcelColumn label="Total" value="totalPrice" />
      </ExcelSheet>
    </ExcelFile>
  );
};

const mapState = (state) => ({
  list: state.account.cart,
  username: state.account.login,
});

export default connect(mapState)(ExportToExcel);
