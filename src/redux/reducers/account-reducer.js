import { types } from "../constants";
import produce from "immer";

const account = produce((draft, action) => {
  switch (action.type) {
    case types.LOGIN:
      draft = action.data;
      return draft;
    case types.LOGOUT:
      draft = {};
      return draft;
    case types.ADD_TO_CART:
      draft.cart = [...draft.cart, action.data];
      return draft;
    default:
      return draft;
  }
}, {});

export { account };
