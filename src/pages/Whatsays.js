import "./Whatsays.css";
import Carousel from "react-bootstrap/Carousel";

function Whatsays() {
  return (
    <div id="Whatsays">
      <h2>WHAT PEOPLE SAY ABOUT US</h2>

      <Carousel fade interval={2000} controls={false} indicators={true}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="carousel-content">
            <h3><strong>Dhanapal,</strong> Founder & CEO</h3>
            <hr className="carousel-divider"/>
            <h3>Dechro</h3>
            <p>"Our focus on innovation continues to drive us forward.  
              The augmented reality feature offers our users an enhanced  
              experience, allowing them to visualize and personalize  
              their home settings with greater ease and creativity."</p>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="carousel-content">
            <h3><strong>Saravanan,</strong> Founder & Director</h3>
            <hr className="carousel-divider"/>
            <h3>CAR M5</h3>
            <p>"Innovation has always set us apart from the competition.  
              The augmented reality feature empowers our users with enhanced  
              visualization and creativity, enabling them to design  
              and explore home settings in a more dynamic and immersive way."</p>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="carousel-content">
            <h3><strong>Saravanan,</strong> manager </h3>
            <hr className="carousel-divider"/>
            <h3>Krishna</h3>
            <p>"Our commitment to product innovation continues to set us apart.  
              The augmented reality feature provides our users with greater  
              clarity and creativity, enabling them to design and visualize  
              their home settings in a more intuitive and engaging manner."</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Whatsays;
