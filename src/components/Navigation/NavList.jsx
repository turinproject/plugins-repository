import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "Log In",
    leftIcon: <FontIcon>exit_to_app</FontIcon>,
    component: Link,
    to: "/signin/"
  });

  NavList.push({
    primaryText: "Sign Up",
    leftIcon: <FontIcon>person_add</FontIcon>,
    component: Link,
    to: "/signup/"
  });

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "Log out",
    leftIcon: <FontIcon>power_settings_new</FontIcon>
  });

  return NavList;
}
export default GetNavList;
