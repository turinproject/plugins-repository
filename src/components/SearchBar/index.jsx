import React, { Component } from "react";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    // const { searchTerm } = this.props;
    return (
      <div className="md-grid md-cell--8 mobile-fix">
        <TextField
          id="searchbar"
          label="Search Plugins"
          lineDirection="center"
          placeholder="Enter a Search Term"
          className="searchbar"
          rightIcon={<FontIcon>search</FontIcon>}
          fullWidth
        />
      </div>
    );
  }
}

export default SearchBar;
