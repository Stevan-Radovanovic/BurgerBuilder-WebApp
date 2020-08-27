import React from "react";
import css from "./Layout.module.css";

const Layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={css.Content}>
      {props.children}
    </main>
  </React.Fragment>
);

export default Layout;
