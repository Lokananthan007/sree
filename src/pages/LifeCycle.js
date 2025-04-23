import "./LifeCycle.css";
import Card from "react-bootstrap/Card";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaTools
} from "react-icons/fa";

function LifeCycle() {

  const cardData = [
    {
      icon: <FaSearch size={40} color="#FFD700" />,
      title: "Technical Analysis",
      text: "In-depth research and requirement gathering to define clear objectives and technical direction.",
    },
    {
      icon: <FaPencilRuler size={40} color="#FFD700" />,
      title: "UI Design & Prototyping",
      text: "Crafting intuitive interfaces and clickable prototypes to align with user expectations.",
    },
    {
      icon: <FaCode size={40} color="#FFD700" />,
      title: "Development",
      text: "Transforming designs into high-quality, scalable code using modern development practices.",
    },
    {
      icon: <FaBug size={40} color="#FFD700" />,
      title: "Quality Assurance",
      text: "Comprehensive testing ensures the product is bug-free, reliable and ready for launch.",
    },
    {
      icon: <FaRocket size={40} color="#FFD700" />,
      title: "Post Launch",
      text: "Smooth deployment, performance monitoring and early feedback implementation.",
    },
    {
      icon: <FaTools size={40} color="#FFD700" />,
      title: "Support & Maintenance",
      text: "Ongoing updates, feature improvements and reliable support to ensure long-term performance and user satisfaction.",
    },
  ];

  return (
    <div id="LifeCycle" data-animate="fade-in" data-delay="0.2s">
      <h3 data-animate="fade-in" data-delay="0.2s">Project Life Cycle</h3>
      <div className="Lifecard-container" data-animate="fade-in" data-delay="0.2s">
        {cardData.map((card, index) => (
          <Card key={index} className="Lifecard" data-animate="fade-in" data-delay="0.2s">
            <div className="Lifecontent-container" data-animate="fade-in" data-delay="0.2s">
              <div className="Lifeimage-container">
                {card.icon}
              </div>
              <Card.Body className="Lifetext-container" data-animate="fade-in" data-delay="0.2s">
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

export default LifeCycle;
