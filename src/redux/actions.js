import { types } from "./constants";
import { errorToast } from "../tools/toasts";
import * as firebase from "firebase/app";
import db from "../tools/firebase";

export const changeSortCriterion = (criterions, sortBy) => ({
  type: types.CHANGE_SORT_CRITERION,
  criterions,
  sortBy,
});

export const setSortCriterion = (criterions, sortBy) => ({
  type: types.SET_SORT_CRITERION,
  criterions,
  sortBy,
});

export const getLogin = (data) => ({
  type: types.GET_LOGIN,
  data,
});

export const login = (data) => ({
  type: types.LOGIN,
  data,
});

export const addToCart = (id, data) => {
  console.log(data);
  db.collection("accounts")
    .doc("" + id)
    .update({
      cart: firebase.firestore.FieldValue.arrayUnion(data),
    });
  return {
    type: types.ADD_TO_CART,
    data,
  };
};

export const logout = () => ({
  type: types.LOGOUT,
});

export const error = (msg) => {
  errorToast(msg);
  return { type: types.ERROR };
};

export const requsetComponents = (path) => ({
  type: types.REQUEST_COMPONENTS,
  path,
});

export const setGoods = (items) => ({
  type: types.SET_GOODS,
  items,
});

export const getGood = (path) => ({
  type: types.GET_GOOD,
  path,
});

export const setGood = (good) => ({
  type: types.SET_GOOD,
  good,
});

export const cleanGood = () => ({
  type: types.CLEAN_GOOD,
});

export const cleanGoods = () => ({
  type: types.CLEAN_GOODS,
});

export const getCategories = (url) => ({
  type: types.GET_CATEGORIES,
  url,
});

export const cleanCategories = (url) => ({
  type: types.CLEAN_CATEGORIES,
  url,
});

export const setCategories = (categories) => ({
  type: types.SET_CATEGORIES,
  categories,
});
