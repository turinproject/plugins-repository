import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import { Link } from 'gatsby';

import ToolbarActions from 'components/ToolbarActions';
import Footer from 'components/Footer';
import GetNavList from './NavList';

const staticPages = ['About', 'Contribute'];

class Navigation extends Component {
  renderToolbar() {
    const { LocalTitle } = this.props;
    if (staticPages.includes(LocalTitle)) return LocalTitle;
    return (
      <Link to="/">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/img/avogadro-logo.png" width="40px" alt="avogadro-logo" />
          Avogadro Plugins
        </div>
      </Link>
    );
  }

  render() {
    const { children, config, LocalTitle } = this.props;
    const isAboutPage = LocalTitle === "About";
    return (
      <NavigationDrawer
        id="navbar"
        drawerTitle={config.siteTitleShort}
        toolbarTitle={this.renderToolbar()}
        contentClassName="main-content"
        navItems={GetNavList()}
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
