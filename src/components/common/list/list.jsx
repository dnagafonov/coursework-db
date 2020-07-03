import React from "react";
import PropTypes from "prop-types";
import ListIcon from "./__icon/list__icon";
import ListHeader from "./__header/list__header";

import "./list.scss";
import DividerGray from "../divider/_gray/divider_gray";
import ListSellers from "./__sellers/list__sellers";

const List = ({ className = "", name, img, bestSeller, sellers, isOpen, onClick}) => (
  <div className={`list ${className} ${isOpen ? "list_open" : "list_close"}`} onClick={onClick}>
    <ListHeader>
      <div className="list__name">{name}</div>
      <ListIcon isOpen={isOpen}/>
    </ListHeader>
    <DividerGray />
    <ListSellers sellers={sellers} />
  </div>
);

List.proptypes = {
  img: PropTypes.string.isRequired,
  bestSeller: PropTypes.exact({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  className: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  sellers: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
};

export default List;
