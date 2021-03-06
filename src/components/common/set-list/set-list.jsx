import React, { useState } from "react";
import PropTypes from "prop-types";
import List from "../list/list";

import "./set-list.scss";

const SetList = ({ lists, onClick, activeId }) => {
  return (
    <div className="set-list">
      {lists.map((e) => (
        <List
          id={e.id}
          key={e.id}
          name={e.name}
          bestSeller={e.bestSeller}
          img={e.img}
          sellers={e.sellers}
          isOpen={e.id === activeId}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

SetList.propTypes = {
  lists: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
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
  }),
  onClick: PropTypes.func.isRequired,
  activeId: PropTypes.number.isRequired
};

export default SetList;
