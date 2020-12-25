import { useState } from 'react';
import useGeoLocation from './useGeoLocation';
import Weather from './Weather';
import { Container, Col, Row } from 'react-bootstrap';
import HourlyForecast from './HourlyForecast';
import SevenDayForecast from './SevenDayForecast';
import Lunar from './Lunar';

function Home() {
    
    // const location = useGeoLocation();

    return (
        <Container style={{marginTop: 50}}>
        <Row md='auto'>
        <Col></Col>
          <Col md='auto'><Weather /></Col>
          <Col></Col>
        </Row >
        <Row style={{marginTop: 50}}>
          <Col></Col>
          <Col md='auto'><HourlyForecast /></Col>
          <Col></Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col></Col>
          <Col md='auto'><SevenDayForecast /></Col>
          <Col></Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col></Col>
          <Col md='auto'><Lunar /></Col>
          <Col></Col>
        </Row>
      </Container>
    )
}

export default Home;