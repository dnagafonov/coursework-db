import { takeEvery, put, call, all } from "redux-saga/effects";
import { types } from "./constants";
import {
  error,
  setGoods,
  setSortCriterion,
  setGood,
  setCategories,
  login,
} from "./actions";
import {
  getComponents,
  fetchDoc,
  requestCategories,
  getAccounts,
} from "../tools/requests";

export function* mainSaga() {
  yield all([
    componentsWatcher(),
    sortWatcher(),
    goodWatcher(),
    categoriesWatcher(),
    accountWatcher()
  ]);
}

export function* componentsWatcher() {
  yield takeEvery(types.REQUEST_COMPONENTS, componentsWorker);
}

export function* sortWatcher() {
  yield takeEvery(types.CHANGE_SORT_CRITERION, sortWorker);
}

export function* goodWatcher() {
  yield takeEvery(types.GET_GOOD, goodWorker);
}

export function* categoriesWatcher() {
  yield takeEvery(types.GET_CATEGORIES, categoriesWorker);
}

export function* accountWatcher() {
  yield takeEvery(types.GET_LOGIN, accountWorker);
}

function* accountWorker(action) {
  try {
    console.log(action);
    const alogin = action.data.username;
    const apassword = action.data.password;
    const accounts = yield call(() => getAccounts());
    const acc = accounts.find(
      (e) => e.login === alogin && e.password === apassword
    );
    if (acc) {
      console.log(1212);
      yield put(login(acc));
    } else {
      yield put(error("Неверные данные!"));
    }
  } catch (e) {
    console.log(e);
    yield put(error("Ошибка при получении аккаунта!"));
  }
}

function* categoriesWorker(action) {
  try {
    const categories = yield call(() => requestCategories(action.url));
    yield put(setCategories(categories));
  } catch (e) {
    console.log(e);
    yield put(error("Ошибка при получении категории!"));
  }
}

function* componentsWorker(action) {
  try {
    const goods = yield call(() => getComponents(action.path));
    if (goods.length) yield put(setGoods(goods));
    else put(error("Товары отсутствуют!"));
  } catch {
    yield put(error("Ошибка при получении компонентов!"));
  }
}

function* goodWorker(action) {
  try {
    const good = yield call(() => fetchDoc(action.path));
    yield put(setGood(good));
  } catch (e) {
    console.log(e);
    yield put(error("Ошибка при получении компонентa!"));
  }
}

function* sortWorker(action) {
  try {
    const criterions = action.criterions.map((e) => ({
      name: e.name,
      isAsc: e.name === action.sortBy.name ? !e.isAsc : true,
      active: e.name === action.sortBy.name,
    }));
    yield put(setSortCriterion(criterions, action.sortBy));
  } catch {
    yield put(error("Ошибка сортировки!"));
  }
}
