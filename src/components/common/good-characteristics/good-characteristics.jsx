import React from "react";
import PropTypes from "prop-types";
import Note from "../note/note";

import "./good-characteristics.scss";

const GoodCharacteristics = ({ description }) => (
  <article className="good-characteristics">
    <Note>Описание:</Note>
    <div className="">
          <div className="pre good-characteristic">
            {description}
          </div>
    </div>
  </article>
);

GoodCharacteristics.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GoodCharacteristics;
