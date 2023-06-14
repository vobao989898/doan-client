import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import * as contant from "./contants/index";
import Adminroute from "./commom/AdminRoute/index";
import AdminrouteDH from "./commom/AdminRouteDH/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configstore from "./redux/configstore";
import ModalProduct from "./component/modalProduct/index";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import MessengerCustomerChat from "react-messenger-customer-chat";
const store = configstore();

function App(props) {
  function renderAdminRoute() {
    let xhtml = null;
    xhtml = contant.ROUTESSTC.map((route) => {
      return (
        <Adminroute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        ></Adminroute>
      );
    });
    return xhtml;
  }

  function renderAdminRouteDH() {
    let xhtml = null;
    xhtml = contant.ROUTESDH.map((route) => {
      return (
        <AdminrouteDH
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        ></AdminrouteDH>
      );
    });
    return xhtml;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="tong">
          <NotificationContainer />
          <ModalProduct></ModalProduct>
          <Switch>
            {renderAdminRouteDH()}
            {renderAdminRoute()}
            <MessengerCustomerChat
              pageId="100952058765770"
              appId="929094977622295"
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
