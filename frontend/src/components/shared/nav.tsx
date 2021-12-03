export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
      <div className="container text-light">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <i className="fa fa-envelope mx-2" />
            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">hainho1001@gmail.com</a>
            <i className="fa fa-phone mx-2" />
            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">0326917446</a>
          </div>
          <div>
            <a className="text-light" href="https://fb.com/hainho1001" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
            <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
            <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
            <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};