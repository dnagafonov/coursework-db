import db from "./firebase";
import { errorToast } from "./toasts";
import { normalizePath, sleep } from "./tools";
import products from "./categories/production.json";
import flowers from "./categories/flowers.json";
import vegetables from "./categories/vegetables.json";
import fruits from "./categories/fruits.json";

export const fetchCollection = async (collection) => {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map((doc) => doc.data());
};

export const fetchDoc = async (path) => {
  const npath = normalizePath(path);
  const snapshot = await db.doc(npath).get();
  return snapshot.data();
};

const getOther = () => {
  return fetchCollection("products/vegetables/basic");
};

const getFruitsBasic = () => {
  return fetchCollection("products/vegetables/basic");
};

const getFruitsExotic = () => {
  return fetchCollection("products/vegetables/basic");
};

const getFlowersBasic = () => {
  return fetchCollection("products/flowers/basic");
};

const getFlowersExostic = () => {
  return fetchCollection("products/flowers/exotic");
};

const getVegetablesBasic = () => {
  return fetchCollection("products/vegetables/basic");
};

const getVegetablesExotic = () => {
  return fetchCollection("products/vegetables/exotic");
};

export const getAccounts = () => {
  return fetchCollection("accounts");
};

export const getComponents = (path) => {
  const npath = normalizePath(path);
  switch (npath) {
    case "/products/flowers/basic":
      return getFlowersBasic();
    case "/products/flowers/exotic":
      return getFlowersExostic();
    case "/products/vegetables/basic":
      return getVegetablesBasic();
    case "/products/vegetables/exotic":
      return getVegetablesExotic();
    case "/products/fruits/basic":
      return getFruitsBasic();
    case "/products/fruits/exotic":
      return getFruitsExotic();
    case "/products/other":
      return getOther();
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};

export const requestCategories = async (url) => {
  const nurl = normalizePath(url);
  switch (nurl) {
    case "/products":
      return await sleep(products, 300);
    case "/products/flowers":
      return await sleep(flowers, 300);
    case "/products/vegetables":
      return await sleep(vegetables, 300);
    case "/products/fruits":
      return await sleep(fruits, 300);
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};
