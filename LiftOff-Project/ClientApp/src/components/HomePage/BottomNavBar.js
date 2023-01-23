import React, { Component, useRef, useEffect } from 'react';
import css from './BottomNavBarMenu.module.css';

export class BottomNavBar extends Component {
    static displayName = BottomNavBar.name;

    render() {
        function BottomBar() {
            // Create a ref for the bottom bar element
            const bottomBarRef = useRef(null);

            useEffect(() => {
                // Get the bottom bar element
                const bottomBar = bottomBarRef.current;

                // Listen for the scroll event on the window
                window.addEventListener("scroll", handleScroll);

                // Clean up the event listener on unmount
                return () => {
                    window.removeEventListener("scroll", handleScroll);
                };

                function handleScroll() {
                    // Get the current scroll position
                    const scrollPosition = window.pageYOffset;

                    // Check if the user has scrolled down more than the height of the bottom bar
                    if (scrollPosition > bottomBar.offsetHeight) {
                        // If so, set the bottom bar's position to "absolute"
                        bottomBar.style.position = "absolute";
                    } else {
                        // If not, set the bottom bar's position to "fixed"
                        bottomBar.style.position = "fixed";
                    }
                }
            }, []);
        }

        return (

            <div id={css.bottombar}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                    alt="tmdb logo" />
                <br />
                <p>This product uses the TMDB API but <br /> is not endorsed or certified by TMDB.</p>
            </div>
        );
    }
}