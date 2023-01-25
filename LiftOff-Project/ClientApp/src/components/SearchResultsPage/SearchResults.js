import React, { Component } from 'react';
import { SearchTable } from "./SearchTable";
//import { SearchData } from "./SearchData";
//import Axios from "axios";



export class SearchResults extends Component {
  static displayName = SearchResults.name;

  componentDidMount() {
    //const [Post, setPost] = React.useState(null);
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