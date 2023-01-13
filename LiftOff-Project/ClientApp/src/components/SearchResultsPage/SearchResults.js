import React, { Component } from 'react';
import { SearchTable } from "./SearchTable";

export class SearchResults extends Component {
  static displayName = SearchResults.name;

  componentDidMount() {
    document.body.style.background = "white";
  }

  render() {
    return (
      <div>
        <SearchTable />
      </div>
    );
  }
}