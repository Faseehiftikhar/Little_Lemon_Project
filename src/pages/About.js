import "./About.css";
import AboutPic1 from "../images/about-us/brick-wall-1834784_1920.jpg";
import AboutPic2 from "../images/about-us/restaurant-1837150_1920.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon Restaurant</h2>
            <h3 className="emon-primary-dark">Chicago</h3>
            <p>Welcome to Little Lemon Restaurant, a cherished gem in the heart of Chicago, where Mediterranean tradition meets modern innovation. As a family-owned establishment, 
            we take great pride in offering an authentic dining experience that reflects our commitment to both time-honored recipes and contemporary culinary artistry.
            </p>
            <p>
            At Little Lemon, we carefully curate our menu, sourcing the finest and freshest ingredients to bring you the true flavors of the Mediterranean. 
            Our chefs, inspired by generations of culinary heritage, skillfully blend traditional recipes with modern techniques, creating a unique and delightful fusion.
            Our warm and inviting ambiance provides the perfect backdrop for a memorable dining experience, whether you're here for a casual lunch, 
            a romantic dinner, or a special celebration. Our dedicated staff is committed to ensuring that your time with us is nothing short of exceptional.
            </p>
            <p>Little Lemon Restaurant is not just a place to eat; it's a journey through the rich tapestry of Mediterranean flavors. 
            Join us as we celebrate tradition and innovation in every dish, bringing the essence of the Mediterranean right to your table. 
            Thank you for being a part of our culinary story – we look forward to welcoming you to our family at Little Lemon Restaurant.</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
