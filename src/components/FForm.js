import React from 'react'; import HCaptcha from '@hcaptcha/react-hcaptcha';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import '../App.css';
import { getInput } from './FProcess';
import './FResults';
import { Redirect } from 'react-router-dom';
import { delInput } from './FProcess';

function Twform() {
  const [validated, setValidated] = useState(false);
  const [fn, setfn] = React.useState('');
  const [ln, setln] = React.useState('');
  const [ti, setti] = React.useState('');
  const [ft, setft] = React.useState('');
  const [ih, setih] = React.useState('');
  const [po, setpo] = React.useState('');
  const [st, setst] = React.useState('');
  const [ct, setct] = React.useState('');
  const [sa, setsa] = React.useState('');
  const [zc, setzc] = React.useState('');
  const [se, setse] = React.useState(false);
  const [sp, setsp] = React.useState(false);
  const [sf, setsf] = React.useState(false);
  const [sw, setsw] = React.useState(false);
  const [sm, setsm] = React.useState(false);
  const [sv, setsv] = React.useState(false);
  const [mb, setmb] = React.useState('');
  const [em, setem] = React.useState('');
  const [tos, settos] = React.useState(false);
  const [goti, setgoti] = React.useState(false);
  const [token, setToken] = useState(null);

  const captchaRef = useRef(null);


  //const { verify } = require('hcaptcha');

  //const secret = '0x11f0ecD744EB5BF7fFFd84B0d539B0E05c1E45b9';
  //const [token,setToken] = React.useState(false);



  const handleSubmit = (event) => {

    let y = captchaRef.current.execute();
    console.log("Does captcha excute return anything?");
    console.log(y);
    
    const form = event.currentTarget;
    console.log("what is the value of token");
    console.log(token);
    event.preventDefault();
    if (form.checkValidity() === false) {
      console.log("in the checkvalidity of the if statement");
      event.preventDefault();
      event.stopPropagation();

    } else {
      console.log("b4 the set true to the handle submit");
      setValidated(true);
      let y = dothis();
      if (!y) {
        event.preventDefault();
      }
    }



  };
  function dothis() {
    if (validated && token !== null) {
      let x = getInput(fn, ln, ti, ft, ih, po, st, ct, sa, zc, se, sp, sf, sw, sm, sv, mb, em, tos);
      console.log("after the getinput");
      //window.location = '/FResults';
      if (x && token !== null) {
        setgoti(true);
        //window.open('/FResults');
        //return <Redirect to='/FResults' target='_blank' rel='noopener noreferrer' />;
      } else {

        return false;
      }
    }
  }

  return (
    <div >
      <div className="col-md-12 d-flex justify-content-center">
        <h4>CSC 642 848 Fall 2021 Individual Assignment Vivian Kuang</h4>

      </div>
      <div className="col-md-12 d-flex justify-content-center">
        <h4>Data survey form</h4>

      </div>
      <div id="bigdiv">
        <div className="col-md-12 d-flex justify-content-center linehere" >
          <h3>Items marked with * are mandatory</h3>

        </div>
        <Form noValidate validated={validated} id="formid">
          <Col sm={12} id="fitt">
            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="fnid">
                <Form.Label column sm={4}>First name<h3>*</h3></Form.Label>
                <Col sm={7}>
                  <Form.Control
                    required
                    type="text"
                    value={fn}
                    onChange={(e) => {
                      if (e.target.value.length <= 40) {
                        setfn(e.target.value);
                      } else {
                        document.getElementById('fnid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="First Name"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid First Name (up to 40 characters).
                  </Form.Control.Feedback></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="lnid">
                <Form.Label column sm={4}>Last name<h3>*</h3></Form.Label>
                <Col sm={7}>
                  <Form.Control
                    required
                    type="text"
                    value={ln}
                    onChange={(e) => {
                      if (e.target.value.length <= 40) {
                        setln(e.target.value);
                      } else {
                        document.getElementById('lnid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="Last Name"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Last Name (up to 40 characters).
                  </Form.Control.Feedback></Col>
              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label column sm={4}>Choose Preferred Title<h3>*</h3></Form.Label>
                <Col sm={4}>
                  <Form.Select required value={ti}
                    onChange={e => setti(e.target.value)}>
                    <option>None</option>
                    <option>Student</option>
                    <option>Professor</option>
                    <option>Staff</option>
                    <option>Retired</option>

                  </Form.Select>
                </Col>
              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
                <Form.Label column sm={4}> Your Height</Form.Label>
                <Col sm={2}>
                  <Form.Control
                    //required
                    type="text"
                    value={ft}
                    onChange={e => setft(e.target.value)}
                    placeholder="0"
                  /></Col>
                <Form.Label column sm={2}>Feet(s)</Form.Label>
                <Col sm={2}>
                  <Form.Control
                    //required
                    type="text"
                    value={ih}
                    onChange={e => setih(e.target.value)}
                    placeholder="0"
                  /></Col>
                <Form.Label column sm={2}>Inch(es)</Form.Label>

              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="poid">
                <Form.Label column sm={4}>Phone Number</Form.Label>
                <Col sm={7}>
                  <Form.Control

                    type="text"
                    value={po}
                    onChange={(e) => {
                      if (e.target.value.length <= 12) {
                        setpo(e.target.value);
                      } else {
                        document.getElementById('poid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="123-456-7890"
                  /></Col>

              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="stid">
                <Form.Label column sm={4}>Street<h3>*</h3></Form.Label>
                <Col sm={7}>
                  <Form.Control
                    required
                    type="text"
                    value={st}
                    onChange={(e) => {
                      if (e.target.value.length <= 40) {
                        setst(e.target.value);
                      } else {
                        document.getElementById('stid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="000 Name Street"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid street. (up to 40 characters)
                  </Form.Control.Feedback></Col>
              </Form.Group>



              <Form.Group as={Row} className="mb-3" controlId="ctid">
                <Form.Label column sm={4}>City<h3>*</h3></Form.Label>
                <Col sm={7}>
                  <Form.Control
                    required
                    type="text"
                    value={ct}
                    onChange={(e) => {
                      if (e.target.value.length <= 40) {
                        setct(e.target.value);
                      } else {
                        document.getElementById('ctid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="City Name"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city. (up to 40 characters)
                  </Form.Control.Feedback></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="said">
                <Form.Label column sm={4}>State<h3>*</h3></Form.Label>

                <Col sm={2}>
                  <Form.Control

                    required
                    type="text"
                    value={sa}
                    onChange={(e) => {
                      if (e.target.value.length <= 40 || e.target.value.match(/^[A-Z][A-Z]$/)) {
                        setsa(e.target.value);
                      } else {
                        document.getElementById('said').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="XX"
                  />


                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state. (up to 2 captial characters)
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="zcid">
                <Form.Label column sm={4}>Zip Code<h3>*</h3></Form.Label>
                <Col sm={3}>
                  <Form.Control
                    required
                    type="text"
                    value={zc}
                    onChange={(e) => {
                      if (e.target.value.match(/^\d{5}$/) || e.target.value.length <= 5) {
                        setzc(e.target.value);
                      } else {
                        document.getElementById('zcid').isValid = false;
                        setValidated(false);
                      }
                    }}
                    placeholder="12345"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip code. (up to 5 posite digits)
                  </Form.Control.Feedback></Col>
              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="formGridEmail">
                <Form.Label column sm={4}>Check all services you require</Form.Label>
                <Col sm={7}>
                  <Form.Check type="checkbox" label="Email" value={se} onChange={e => setse(!se)} />
                  <Form.Check type="checkbox" label="Phone" value={sp} onChange={e => setsp(!sp)} />
                  <Form.Check type="checkbox" label="Facebook" value={sf} onChange={e => setsf(!sf)} />
                  <Form.Check type="checkbox" label="Tweeter" value={sw} onChange={e => setsw(!sw)} />
                  <Form.Check type="checkbox" label="Surface Mail" value={sm} onChange={e => setsm(!sm)} />
                  <Form.Check type="checkbox" label="Personal Visit" value={sv} onChange={e => setsv(!sv)} />
                </Col>
              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label column sm={4}>Your Monthly Budget for services</Form.Label>
                <Col sm={5}>
                  <Form.Select value={mb}
                    onChange={e => setmb(e.target.value)}>
                    <option >less than $ 50</option>
                    <option>between $ 50 and $ 100</option>
                    <option> above $ 100</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </div>

            <div className="linehere">
              <Form.Group as={Row} className="mb-3" controlId="formGridEmail">
                <Form.Label column sm={4}>Your Email<h3>*</h3></Form.Label>
                <Col sm={7}>
                  <Form.Control required type="email" placeholder="@mail"
                    value={em} onChange={e => setem(e.target.value)} />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email. (must have an @ charcter)
                  </Form.Control.Feedback></Col>
              </Form.Group>
            </div>

            <div className="linehere" >

              <Form.Group  ><div id="needinline">
                <div id="cbox">

                  <Form.Check
                    required
                    label="I agree to -> "
                    value={tos}
                    onChange={e => settos(!tos)}
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </div>
                <div id="tbox"><a href="https://www.google.com/" > terms</a></div><div id="sbox"><h3>*</h3></div>
              </div>
              </Form.Group><Col sm={11}></Col>
            </div>



            <Row className="justify-content-between" id="buttonrow">
              <Col sm={3}><Button variant="outline-secondary" type="button" >Close</Button>
              </Col>
              <Col sm={3}><Button variant="outline-primary" type="button" onClick={handleSubmit}>Submit form</Button>
                <HCaptcha
                  sitekey="31a2d3b1-806c-45ba-ab73-3dd4a79a3147"
                  size="invisible"
                  onVerify={setToken}
                  ref={captchaRef}
                />
              </Col>
            </Row>

          </Col>
        </Form></div>
        {goti  && <div >

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

</div>}
    </div>
  );
}

export default Twform;