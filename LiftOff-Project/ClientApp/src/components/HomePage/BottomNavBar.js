import React, { useRef, useEffect } from 'react';
import css from './BottomNavBarMenu.module.css';

export function BottomNavBar() {
    const bottomBarRef = useRef(null);

    useEffect(() => {
        const bottomBar = bottomBarRef.current;

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        function handleScroll() {
            const scrollPosition = window.pageYOffset;

            if (scrollPosition > bottomBar.offsetHeight) {
                bottomBar.style.position = "absolute";
            } else {
                bottomBar.style.position = "fixed";
            }
        }
    }, []);

    return (
        <div id={css.bottombar}>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                alt="tmdb logo" />
            <br />
            <p>This product uses the TMDB API but <br /> is not endorsed or certified by TMDB.</p>
        </div>
    );
}
