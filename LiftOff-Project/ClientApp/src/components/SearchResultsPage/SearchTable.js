import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export class SearchTable extends React.Component {
    render() {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie Title</th>
              <th>Add to Watch List?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Movie Title</td>
                      <td><Link to="/my-watch-list">Add</Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Movie Title</td>
              <td><a href="">Add</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Movie Title</td>
              <td><a href="">Add</a></td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }