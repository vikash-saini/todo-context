import React from "react";
import { ThemeContext } from "../constants/theme-context";

class ThemedButton extends React.Component {
  render() {
    console.log(this);
    let theme = this.context;
    return <>background color of theme is:  {theme.background}</>;
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
