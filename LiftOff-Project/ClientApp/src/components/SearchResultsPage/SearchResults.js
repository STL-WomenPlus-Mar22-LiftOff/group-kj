import React, { Component } from 'react';
import { SearchTable } from "./SearchTable";

export class SearchResults extends Component {
    static displayName = SearchResults.name;
  
    render() {
      return (
        <div>
            <h1>This is the search results page</h1>
            <SearchTable />
        </div>
      );
    }
  }