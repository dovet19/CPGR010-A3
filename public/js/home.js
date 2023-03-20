function Home() {
  return (
    <>
      <section id="hero">
        <h2>Travel the World</h2>
        <p>Discover new places, meet new people and create new memories.</p>
        <a href="./package.html">
          <button className="btn btn-light">Explore</button>
        </a>
      </section>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Home />);
