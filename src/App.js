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
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

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
  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
      
        <div className="tong"  onScroll={handleScroll}>
        <NotificationContainer/>
          <ModalProduct></ModalProduct>
          <Switch>
            {renderAdminRouteDH()}
            {renderAdminRoute()}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
