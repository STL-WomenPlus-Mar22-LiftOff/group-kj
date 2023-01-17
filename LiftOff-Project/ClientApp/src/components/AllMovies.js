import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const AllMovies = () => {

    const [ValuesController, setMovie] = useState([]);
    

     useEffect (() => {
        axios.get("http://localhost:43313")
    .then((response) => {
        setMovie((existingData)=> {
            return response.data;
        })
    })
    
    }, []);


    
    return (
        <Row xs={1} md={3} className="g-4 mt-1">
            {ValuesController.map((mv) => (
                <Col key={mv.id}>
                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>{mv.Title}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
export default AllMovies;