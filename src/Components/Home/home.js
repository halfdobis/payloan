import "./home.css";

function Home() {
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

            <button type="button" className="button">
              HOW TO APPLY
            </button>
            <button type="button" className="sub-button ml-5">
              APPLY NOW
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
