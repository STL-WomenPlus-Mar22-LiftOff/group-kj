import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchForm } from "./SearchForm";
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const homeBackground = {
  backgroundImage: "url('./movies.jpg;)",
  backgroundSize: 'cover',
}

export class Home extends React.Component {
  static displayName = Home.name;

  componentDidMount() {
    document.body.style = { homeBackground };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className={css.box}>
              <h2 className={css.h2}>One search for all your streaming services. Find your next favorite movie here!</h2>
              <ul className={css.gallery}>
                <li><img src="https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?fit=750%2C750&strip=allhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fventurebeat.com%2Fmedia%2Fnetflix-made-a-new-logo-thats-designed-for-mobile-devices%2F&psig=AOvVaw2QTJD9qcrMRn-De7L2ouRB&ust=1673313625263000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNj_wJOpufwCFQAAAAAdAAAAABAE" className={css.imgsize} /></li>
                <li><img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--xT7E_lQY--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_972,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1591287416567/Hulu_Logo.jpg" className={css.imgsize} /></li>
                <li><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/didisney-plus-logo-1579600794.jpg" className={css.imgsize} /></li>
                <li><img src="https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png" className={css.imgsize} /></li>
                <li><img src="https://www.citypng.com/public/uploads/preview/-11596295859szf5ufbz1h.png" className={css.imgsize} /></li>
              </ul>
              <div>
                <Link to="/create-account"><Button variant="primary" className={css.click}>Sign Up!</Button>{' '}</Link>
              </div>
            </div>
          </Col>

          <Col>
            <SearchForm />
          </Col>

        </Row>
      </Container >
    );
  }
}