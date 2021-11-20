import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { delInput } from './FProcess';

export function FResults() {
  console.log("inside he FResults functiom");

  const handleSubmit = (event) => {
    delInput();

  };

  return (
    <div >

      <div className="col-md-12 d-flex justify-content-center">
        <h4>Results verification page Vivian Kuang</h4>

      </div>
      <div id="bigdiv">
        <Form onSubmit={handleSubmit}>
          <Col sm={12}>
            <div className="linehere">
              <h5>Name:   {localStorage.fn} {localStorage.ln}</h5>
            </div>

            <div className="linehere">
              <h5>Perferred Title:   {localStorage.ti}</h5>
            </div>

            <div className="linehere">
              <h5>Your Height:   {localStorage.height}</h5>
            </div>

            <div className="linehere">
              <h5>Phone:   {localStorage.po}</h5>
            </div>

            <div className="linehere">
              <h5>Address:   {localStorage.st} {localStorage.ct} {localStorage.sa} {localStorage.zc}</h5>


              <Col sm={12} >
               <img src={`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${localStorage.lat},${localStorage.long}/15?mapSize=500,500&pp=${localStorage.lat},${localStorage.long};21;AA&key=AjLO9XD7SI7kT5yhQ1tbmi2fGDB1tnz5OBD4Mx0f0oQPXy9Oz3reskGgLrmKS7Jm`} alt="Can't Find Your Address on The Map."/>
              </Col>
            </div>

            <div className="linehere">
              <h5 >All services you require</h5>
              <h5 >{localStorage.se}   Email</h5>
              <h5 >{localStorage.sp}   Phone</h5>
              <h5 >{localStorage.sf}   Facebook</h5>
              <h5 >{localStorage.sw}   Tweeter</h5>
              <h5 >{localStorage.sm}   Surface Mail</h5>
              <h5 >{localStorage.sv}   Personal Visit</h5>
            </div>

            <div className="linehere">
              <h5>Your Monthly Budget for services:   {localStorage.mb}</h5>
            </div>

            <div className="linehere">
              <h5>Your Email:   {localStorage.em}</h5>
            </div>

            <div className="linehere">
              <h5>{localStorage.tos}   I agree to terms</h5>
            </div>
            <Row className="justify-content-center" id="buttonrow">
            <Button type="submit" onClick={handleSubmit}>Confirm</Button>
            </Row>
          </Col>
        </Form></div>

    </div>

  );
}

export default FResults;