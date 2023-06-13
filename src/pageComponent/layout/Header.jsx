import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid d-none d-lg-block">
      <div className="row align-items-center bg-dark px-lg-5">
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-sm bg-dark p-0">
            <ul className="navbar-nav ml-n2">
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-body small" href="#">
                  Monday, January 1, 2045
                </a>
              </li>
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-body small" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-body small" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row align-items-center bg-white py-3 px-lg-5">
        <div className="col-lg-4">
          <Link href="/" className="navbar-brand p-0 d-none d-lg-block">
            <h1 className="m-0 display-4 text-uppercase text-primary text-md">
              News<span className="text-secondary font-weight-normal">Assesment</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
