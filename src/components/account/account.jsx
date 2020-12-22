import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLogin } from "../../redux/actions";
import Note from "../common/note/note";
import Wrapper from "../common/wrapper/wrapper";
import Cart from "./cart/cart";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import { fetchCollection } from "../../tools/requests";
import ExportToExcel from "../common/ExportToExcel";

const Account = ({ account, getLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);
  const [ed, setEd] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 0 && username.length > 0) {
      getLogin({ username, password });
      setUsername("");
      setPassword("");
    }
  };
  const changeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (account.isAdmin) {
      fetchCollection("products").then(res => setAllData(res))
    }
  }, [account.isAdmin]);
  useEffect(() => {
    setEd(allData)
  }, [allData]);
  console.log(allData);
  return (
    <div className="account media1220">
      <Wrapper>
        <Note>Введите данные для логина</Note>
        {account.login ? (
          <div>
            <Cart items={account.cart} />
          </div>
        ) : (
          <div>
            <div className="login__body_login">
              <label htmlFor="login-username">Login:</label>
              <br />
              <input
                id="login-username"
                type="text"
                value={username}
                onChange={changeUsername}
              />
            </div>
            <div className="login__body_password">
              <label htmlFor="login-password">Password:</label>
              <br />
              <input
                id="login-password"
                type="password"
                value={password}
                min={8}
                onChange={changePassword}
              />
            </div>
            <input
              className="btn-general"
              type="submit"
              value="Confirm"
              onClick={handleSubmit}
            />
          </div>
        )}

        {ed.length ? (
          //<code>{JSON.stringify(allData)}</code>
          <Editor
            key={account.id}
            value={ed}
            mode="code"
          />
        ) : (
          null
        )}
      </Wrapper>
    </div>
  );
};

const mapState = (state) => ({
  account: state.account,
});

export default connect(mapState, { getLogin })(Account);
