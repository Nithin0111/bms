import Contact from '../../book/component/login/Contact';
import '../../css/custom.css';
import feature1 from '../../img/smart-protect-1.jpg';
import Header from './Header';

function Landing() {
  return (
    <div className="bms">
      <div className="hero-wrapper">
        <Header landing={true} />
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h2>A place to get your favorite books</h2>
              <p>
                We deliver on par excellence
                <br />
                We will do many things and things and things
              </p>

              <button className="hero-cta">Order now</button>
            </div>
          </div>
        </section>
      </div>
      <section className="features-section">
        <h2>Our famous book store features</h2>
        <div className="features-content">
          <div className="feature-1">
            <img src={feature1} alt="" />
            <h3>Order Books</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="feature-1">
            <img src={feature1} alt="" />
            <h3>Order Books</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="feature-1">
            <img src={feature1} alt="" />
            <h3>Order Books</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
export default Landing;
