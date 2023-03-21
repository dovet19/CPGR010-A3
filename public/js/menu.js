// Created by Mostafa Mohamed
// For SAIT course: CPRG-010 - Front-End web development using React.js

const navLinks = [
  { text: "Home", url: "/index" },
  { text: "Travel Package", url: "package.html" },
  { text: "Booking", url: "booking.html" },
  { text: "Confirmation", url: "confirmation.html" },
  // { text: 'Show all packages', url: '04-01-products-bootstrap.html' }
];

function MyItem({ item }) {
  const active = window.location.href.indexOf(item.url) > -1;
  console.log(window.location.href, active);
  return (
    <>
      <a
        className={`nav-link ${active ? "active" : ""}`}
        aria-current={active ? "page" : ""}
        href={item.url}>
        {item.text}
      </a>
      {/* <a className="nav-link" href={items.url}>
          {item.text}
      </a> */}
    </>
  );
}
// The navbar template to render
function MyNavbarTemplate({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a
              href="./index.html"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <span class="fs-4">Travel the World</span>
            </a>
            <div className="navbar-nav">{children}</div>
          </div>
        </div>
      </nav>
    </>
  );
}

function MyNavbar({ children }) {
  return (
    <>
      <MyNavbarTemplate>
        {navLinks.map((link, indx) => (
          <MyItem key={indx} item={link} />
        ))}
      </MyNavbarTemplate>
    </>
  );
}

const container = document.getElementById("menu"); // Access the menu element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<MyNavbar />); // Render the React component
