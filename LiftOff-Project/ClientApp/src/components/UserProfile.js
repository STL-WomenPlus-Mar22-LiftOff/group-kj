mport React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBar } from "./HomePage/SearchForm";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import css from './UserProfile.module.css';

const homeBackground = {
    backgroundImage: "url('./movies.jpg;)",
    backgroundSize: 'cover',
}

export class UserProfile extends React.Component {
    static displayName = UserProfile.name;


    componentDidMount() {
        document.body.style = { homeBackground };
    }

    render() {
        return (
            <Container>

                <Row>

                    <Col>
                        <div className={css.box}>
                            <h2 className={css.h2}>Hello {window.user}!</h2>
                            <h3 className={css.h3}>Let's find your next favorite movie.</h3>
                        </div>
                        <br />
                        <br />
                        <div className={css.box}>
                            <SearchBar />
                        </div>
                    </Col>

                    <Col>
                        <div className={css.box}>
                            <Link to="/my-watch-list">Check out your watch list</Link>
                        </div>
                    </Col>

                </Row>

            </Container >
        );
    }
}