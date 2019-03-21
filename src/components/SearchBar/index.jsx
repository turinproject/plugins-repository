import React, { Component } from "react";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    // const { searchTerm } = this.props;
    return (
      <div className="searchbar mobile-fix">
        <TextField
          id="searchbar"
          label="Search Plugins"
          lineDirection="center"
          placeholder="Enter a Search Term"
          rightIcon={<FontIcon>search</FontIcon>}
          fullWidth
        />
      </div>
    );
  }
}

export default SearchBar;
