function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a className="navbar-brand" href="/">
        {" "}
        Chef Stav Nave{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick="addRandomQuote()"
              id="quote_button"
            >
              <i className="fas fa-quote-right fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <i className="fab fa-twitter fa-2x"> About</i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/food">
              <i className="fab fa-github fa-2x">Food</i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="gallery">
              <i className="fas fa-info-circle fa-2x">Gallery</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
