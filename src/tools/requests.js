import db from "./firebase";
import { errorToast } from "./toasts";
import { normalizePath, sleep } from "./tools";
import production from "./categories/production.json";
import flowers from "./categories/flowers.json";
import vegetables from "./categories/vegetables.json";
import fruits from "./categories/fruits.json";

const fetchCollection = async (collection) => {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map((doc) => doc.data());
};

export const fetchDoc = async (path) => {
  const npath = normalizePath(path);
  const snapshot = await db.doc(npath).get();
  return snapshot.data();
};

const getOther = () => {
  return fetchCollection("production/vegetables/basic");
};

const getFruitsBasic = () => {
  return fetchCollection("production/vegetables/basic");
};

const getFruitsExotic = () => {
  return fetchCollection("production/vegetables/basic");
};

const getFlowersBasic = () => {
  return fetchCollection("production/flowers/basic");
};

const getFlowersExostic = () => {
  return fetchCollection("production/flowers/exotic");
};

const getVegetablesBasic = () => {
  return fetchCollection("production/vegetables/basic");
};

const getVegetablesExotic = () => {
  return fetchCollection("production/vegetables/exotic");
};

export const getproduction = (path) => {
  const npath = normalizePath(path);
  switch (npath) {
    case "/production/flowers/basic":
      return getFlowersBasic();
    case "/production/flowers/exotic":
      return getFlowersExostic();
    case "/production/vegetables/basic":
      return getVegetablesBasic();
    case "/production/vegetables/exotic":
      return getVegetablesExotic();
    case "/production/fruits/basic":
      return getFruitsBasic();
    case "/production/fruits/exotic":
      return getFruitsExotic();
    case "/production/other":
      return getVideocards();
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};

export const requestCategories = async (url) => {
  const nurl = normalizePath(url);
  switch (nurl) {
    case "/production":
      return await sleep(production, 300);
    case "/production/flowers":
      return await sleep(flowers, 300);
    case "/production/vegetables":
      return await sleep(vegetables, 300);
    case "/production/fruits":
      return await sleep(fruits, 300);
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};
