function JapanPage() {
  const [departureDate, setDepartureDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [numPassengers, setNumPassengers] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <>
      <div
        style={{
          // display: 'flex',
          // flexDirection: 'colum',
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
          backgroundImage: "url('./img/japan-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          // maskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
          // WebkitMaskImage:
          //   "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
          // filter: "blur(8px)",
          // "-webkit-filter": "blur(8px)",
        }}>
        <h1 style={{ textAlign: "center" }}>Discover Japan</h1>
        <p style={{ textAlign: "center" }}>
          Japan is an island country in East Asia known for its unique blend of
          traditional and modern culture.
        </p>

        <h2 style={{ textAlign: "center" }}>Photos of Japan</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://wearetravelgirls.com/wp-content/uploads/2016/10/tokyo-mud-bath-bar-mudbath0716.jpg"
              alt="Cherry blossoms in Japan"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://lp-cms-production.imgix.net/2021-04/shutterstockRF_713119015.jpg"
              alt="Tokyo Tower at night"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://cdn1.matadornetwork.com/blogs/1/2011/05/Tokyo-Japan-Akihabara-neon-cityscape-destinations-1200x900.jpg"
              alt="Mount Fuji at sunrise"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        </div>

        <h2 style={{ textAlign: "center" }}>Book Your Trip to Japan</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="departure-date">Departure Date:</label>
            <input
              type="date"
              id="departure-date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              id="return-date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="num-passengers">Number of Passengers:</label>
            <input
              type="number"
              id="num-passengers"
              value={numPassengers}
              min="1"
              max="10"
              onChange={(event) => setNumPassengers(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Book Travel
          </button>
        </form>
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<JapanPage />);
