import React from 'react';
import './Home.css';
import { SearchForm } from "./SearchForm";

export class Home extends React.Component {
  static displayName = Home.name;

  render() {
    return (
        <div class="col-xs-12 col-sm-6 col-md-8">
            <h1 class="h1">NEXTwatch</h1><br />
            <h2 class="h2">One search for all your streaming services. Find your next favorite movie here!</h2><br />

            <ul class="gallery">
                <li>netflix</li>
                <li>hulu</li>
                <li>disney +</li>
                <li>hbo max</li>
                <li>amazon prime</li>
            </ul>

            <a href="/create-account">Sign up</a><br /><br />

            <SearchForm />

            <img class="lowerleft" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" />
            <p class="lowerleft">Credit: This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            

        </div>
    );
  }
}
