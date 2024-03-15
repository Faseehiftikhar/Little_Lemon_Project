import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="container mb-3">
      <div className="info white pd pdr-65p">
        <br></br>
        <h1 className="lemon-primary-lemon">Little Lemon Restaurant</h1>
        <h2>Chicago</h2>
        <p>Welcome to our family-owned Mediterranean restaurant, a culinary haven where tradition meets innovation. Nestled in the heart of Chicago, 
        we take pride in curating an authentic dining experience that pays homage to time-honored recipes while infusing a modern twist into every dish.</p>
        <br></br>
        <Link className="txt-dec-none" to="reserve">
          <button className="reserve-btn">Reserve</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
