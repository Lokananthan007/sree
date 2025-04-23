import "./Techlogo.css";
import {
  FaHtml5,
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDjango,
  SiAngular,
  SiLaravel,
  SiFlask,
  SiSpringboot,
} from "react-icons/si";


function Techlogo() {
  const languages = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaReact />, name: "React Native" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiExpress />, name: "Express.js" },
  ];

  const frameworks = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiAngular />, name: "Angular.js" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiMongodb />, name: "Mongoose DB" },
    { icon: <SiMysql />, name: "MySQL" },
  ];


  // Duplicate items to create seamless scrolling
  const duplicateItems = (items) => [...items, ...items];


  return (
    <div id="Techlogo" data-animate="fade-in" data-delay="0.2s">
      {/* Row 1: Languages */}
      <div className="tech-row left-to-right" data-animate="fade-in" data-delay="0.2s">
        <div className="tech-track" data-animate="fade-in" data-delay="0.2s">
          {duplicateItems(languages).map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Frameworks */}
      <div className="tech-row right-to-left" data-animate="fade-in" data-delay="0.2s">
        <div className="tech-track" data-animate="fade-in" data-delay="0.2s">
          {duplicateItems(frameworks).map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techlogo;
