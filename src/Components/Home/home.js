import { useState } from "react";
import InputModal from "../inputModal";
import { Button } from "react-bootstrap";
import "./home.css";

function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container-fluid">
      {/* <img src="./img/logo.png" alt="logo" /> */}
      <header>
        <h1 className="header">WELCOME TO PAYLOAN</h1>
      </header>

      <section className="row">
        <div className="col-md-6">
          <img src="./img/illustration-1.svg" alt="illustration" />
        </div>

        <div className="col-md-6">
          <article>
            <h1 className="heading">IN NEED OF CAPITAL?</h1>

            <p>
              PAYLOAN is a trusted partner to grow and expand your business.
              Over{" "}
              <span className="span">
                three (3) million client-base can't be wrong about our
                reliability and services.
              </span>
            </p>

            <hr style={{ borderTop: "3px dotted green" }} />

            <h1 className="sub-heading">SME.</h1>
            <p>You can now apply for our SME loans online.</p>
            <p>
              You can access up to{" "}
              <span className="sub-span">&#8358;10,000,000</span> credit
              facility with extendable duration of 12 months.
            </p>

            <br />

            <Button type="button" variant="success">
              HOW TO APPLY
            </Button>

            <Button
              type="button"
              variant="primary"
              className="ml-5 btnn"
              onClick={() => setModalShow(true)}
            >
              APPLY NOW
            </Button>

            <InputModal show={modalShow} onHide={() => setModalShow(false)} />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
