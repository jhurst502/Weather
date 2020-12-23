import { useState } from 'react';
import useGeoLocation from './useGeoLocation';
import Weather from './Weather';
import { Container, Col, Row } from 'react-bootstrap';

function Home() {
    
    // const location = useGeoLocation();

    return (
        <Container style={{paddingTop: 20}}>
        <Row md='auto'>
        <Col></Col>
          <Col md='auto'><Weather /></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    )
}

export default Home;