import React from "react";
import { useRouteMatch } from "react-router-dom";
import Good from "./good";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getGood, cleanGood, addToCart } from "../../redux/actions";
import { getGoodSelector } from "../../redux/selectors";
import FallBack from "../../components/common/fallback/fallback";

const GoodContainer = ({ good, account, getGood, cleanGood, addToCart }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    getGood(url);
    return () => cleanGood();
  }, []);
  if (!good) return <FallBack />;
  return <Good good={good} account={account} url={url} addToCart={addToCart} />;
};

const mapState = (state) => ({
  good: getGoodSelector(state),
  account: state.account,
});

export default connect(mapState, { getGood, cleanGood, addToCart })(
  GoodContainer
);
