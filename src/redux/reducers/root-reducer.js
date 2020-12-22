import { combineReducers } from "redux";
import { goods } from "./goods-reducer";
import { good } from "./good-reducer";
import { categories } from "./categories-reducer";
import { account } from "./account-reducer";

const rootReducer = combineReducers({ goods, good, categories, account });

export { rootReducer };
