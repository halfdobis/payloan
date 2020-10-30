import { useState } from "react";
import { Tabs, Card, Form, Col, Button } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import "./tab.css";

function Tab({ name }) {
  const [key, setKey] = useState("home");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Loan Amount">
          <div className="container">
            <header>
              <h3>{`Hello ${name}, how much do you want?`}</h3>
            </header>

            <div className="row">
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <h6 className="head">Heads up!</h6>
                    <h6>
                      We can trust you with up to ten million naira. But we
                      recommend you start with what you can pay.
                    </h6>
                  </Card.Body>
                </Card>

                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // alert("form submitted");
                    setFormSubmitted(true);
                  }}
                >
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="&#8358;  0.00"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col>
                        <Form.Label className="formlabel">
                          Repay Term
                        </Form.Label>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select" required>
                            <option>Select</option>
                            <option>6 Months</option>
                            <option>12 Months</option>
                            <option>18 Months</option>
                            <option>24 Months</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Label className="formlabel">
                          Loan Purpose
                        </Form.Label>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control required as="select">
                            <option>Select</option>
                            <option>Education</option>
                            <option>Business</option>
                            <option>Start Up</option>
                            <option>Personal</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Button type="submit" variant="success">
                    Next
                  </Button>
                </Form>
                <br />
                <h4 className="schedule">PROPOSED SCHEDULE:</h4>
              </div>

              <div className="col-md-6">
                <h6 className="help">Need help?</h6>
                <h6>
                  We will more than happy to assist you in filling this form.
                  Please contact one of our SME manager
                </h6>

                <h6>08022233344, 08111222333</h6>

                <img
                  src="./img/illustration-2.svg"
                  alt="illustration"
                  className="illustration"
                />
              </div>
            </div>
            <div className="text-center mt-5"></div>
          </div>
        </Tab>
        <Tab eventKey="Account" title="Account" disabled>
          <h1>Profile</h1>
        </Tab>
        <Tab eventKey="Something" title="Something" disabled>
          <h1>Contact</h1>
        </Tab>
      </Tabs>
      {formSubmitted && (
        <SweetAlert
          success
          title="Yay!"
          onConfirm={() => {
            setFormSubmitted(false);
            window.location.reload();
          }}
        >
          Your form is submitted.
        </SweetAlert>
      )}
    </>
  );
}

export default Tab;
