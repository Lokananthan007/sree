import "./Whychoosecard.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import REDUCE from "../assets/images/choose-icon (1).png";
import EXPERIENCE from "../assets/images/choose-icon (2).png";
import AGILE from "../assets/images/choose-icon (6).jpg";
import RISK from "../assets/images/choose-icon (4).png";
import STAND from "../assets/images/choose-icon (5).png";
import DEVELOPERS from "../assets/images/choose-icon (3).png";


function Whychoosecard() {


  const cardData = [
    {
      img: EXPERIENCE,
      title: "EXPERIENCE",
      text: "With years of expertise in the industry, we deliver apps that combine innovation, efficiency, and seamless user experience.",
    },
    {
      img: REDUCE,
      title: "REDUCE COST",
      text: "Streamlined processes minimize time and resources, significantly reducing development costs.",
    },
    {
      img: AGILE,
      title: "WE'RE AGILE",
      text: "We adapt quickly to changes, ensuring efficient and flexible project delivery.",
    },
    {
      img: DEVELOPERS,
      title: "EXCEPTIONAL DEVELOPERS",
      text: "Our expert developers ensure top-quality applications tailored to client needs.",
    },
    {
      img: RISK,
      title: "REDUCE RISK",
      text: "We use cutting-edge technologies to minimize risks and ensure success.",
    },
    {
      img: STAND,
      title: "WE STAND BY YOU",
      text: "We support you throughout the journey, ensuring  success and growth.",
    },
  ];

  return (
    <div id="Whychoosecard" data-animate="fade-in" data-delay="0.2s">
      <div className="Whycard-container" data-animate="fade-in" data-delay="0.2s">
        {cardData.map((card, index) => (
          <Card key={index} className="Whycard" data-animate="fade-in" data-delay="0.2s">
            <div className="Whycontent-container" data-animate="fade-in" data-delay="0.2s">
              <div className="Whyimage-container" data-animate="fade-in" data-delay="0.2s">
                <Image src={card.img} alt={card.title} fluid />
              </div>
              <Card.Body className="Whytext-container" data-animate="fade-in" data-delay="0.2s">
                <Card.Title data-animate="fade-in" data-delay="0.2s">{card.title}</Card.Title>
                <Card.Text data-animate="fade-in" data-delay="0.2s">{card.text}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Whychoosecard;
