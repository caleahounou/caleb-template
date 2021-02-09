import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from '../images/mohamed-nohassi-DdglEoIC2y4-unsplash.jpg';

const Service = () =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image Classname="ImageRond" src={logo} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Service;