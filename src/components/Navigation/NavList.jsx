import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList() {
  const NavList = [
    {
      primaryText: "Avogadro 2",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });

  NavList.push({
    primaryText: "Contribute",
    leftIcon: <FontIcon>how_to_reg</FontIcon>,
    component: Link,
    to: "/contribute/"
  });

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "Sign Up",
    leftIcon: <FontIcon>person_add</FontIcon>,
    component: Link,
    to: "/auth/signup/"
  });

  NavList.push({
    primaryText: "Log out",
    leftIcon: <FontIcon>power_settings_new</FontIcon>
  });

  return NavList;
}
export default GetNavList;
