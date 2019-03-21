import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from 'components/ToolbarActions';
import Footer from 'components/Footer';
import GetNavList from './NavList';

import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const isAboutPage = LocalTitle === "About";
    return (
      <NavigationDrawer
        id="navbar"
        drawerTitle={config.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">{children}</div>
        <Footer userLinks={!isAboutPage} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
