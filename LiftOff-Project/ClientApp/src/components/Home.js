import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div class="col-xs-12 col-sm-6 col-md-8">
        
        <h1>NEXTwatch</h1><br/>

        <h2>One search for all your streaming services. Find your next favorite movie here!</h2><br />

            <a href="/create-account">Sign up</a><br /><br />

            <form>

                <label for="genre">Choose a genre:</label>
                <select name="genre" id="genre">
                    <option value="action">Action</option>
                    <option value="romance">Romance</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                </select> <br /><br />

                <label for="rating">Choose a rating:</label>
                <select name="rating" id="geratingnre">
                    <option value="fourOrMore">Four or more stars</option>
                    <option value="threeOrMore">Three or more stars</option>
                    <option value="twoOrMore">Two or more stars</option>
                    <option value="oneOrMore">One or more stars</option>
                </select>
                <br /><br />

                <input type="submit" />

        </form>

        </div>
    );
  }
}
