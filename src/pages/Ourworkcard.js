import "./Ourworkcard.css";
import Krishna from "../assets/images/project (3).png";
import Carm5 from "../assets/images/project (2).png";
import Dechro from "../assets/images/project (4).png";
import Dechro1 from "../assets/images/project (1).png";

import useGlobalScroll from "../animation/useGlobalScroll";

function Ourworkcard() {
  useGlobalScroll();
  return (
    <div id="Ourworkcard">
      <div className="row">
        {/* Krishna Admin Dashboard */}
        <div className="col col-12 col-md-6 mb-4 order-1 order-md-1" data-animate="fade-in" data-delay="0.2s">
          <h2 data-animate="fade-in" data-delay="0.2s">🚀 Krishna Admin Dashboard</h2>
          <p data-animate="fade-in" data-delay="0.2s">
            The <strong>Krishna Admin Dashboard</strong> provides a powerful interface to manage leads,
            track employee attendance, and monitor orders effectively. The clean and user-friendly UI ensures seamless navigation and efficient data management.
          </p>
          <h2 data-animate="fade-in" data-delay="0.2s">🛠️ Tech Stack Used</h2>
          <ul>
            <li data-animate="fade-in" data-delay="0.2s" ><strong>Frontend:</strong> React.js, HTML, and CSS to create an intuitive and responsive interface.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Backend:</strong> Node.js/Express to manage server-side logic and API requests.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Database:</strong> MySQL with Sequelize for managing and storing data efficiently.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>API:</strong> RESTful APIs built with Express to connect the frontend and backend securely.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>State Management:</strong> Context API and Redux for managing application-level state and ensuring smooth user interactions.</li>
          </ul>
        </div>
        <div className="col col-12 col-md-6 mb-4 order-2 order-md-2 imagge">
          <img src={Krishna} alt="project" className="img-fluid" />
        </div>
      </div>

      <div className="row">
        {/* CarM5 Website */}
        <div className="col col-12 col-md-6 mb-4 order-2 order-md-1 imagge">
          <img src={Carm5} alt="project" className="img-fluid" />
        </div>
        <div className="col col-12 col-md-6 mb-4 order-1 order-md-2" data-animate="fade-in" data-delay="0.2s">
          <h2 data-animate="fade-in" data-delay="0.2s">🚀 CarM5 Website</h2>
          <p data-animate="fade-in" data-delay="0.2s">
            CarM5 offers a qualified car repair and car wash center with a neat and clean UI that ensures an engaging and seamless user experience.
            Our platform showcases various services, allowing users to explore available options, contact technicians, and learn more about our expertise in car maintenance and detailing.
          </p>
          <h2 data-animate="fade-in" data-delay="0.2s">🛠️ Tech Stack Used</h2>
          <ul>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Frontend:</strong> HTML, CSS, and JavaScript for building an intuitive and responsive interface.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Backend:</strong> Node.js/Express to handle server-side logic and API requests.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Database:</strong> MongoDB with Mongoose for managing and storing customer and service data efficiently.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>API:</strong> RESTful APIs built with Express to connect the frontend and backend securely.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>State Management:</strong> Context API to manage application-level state and ensure smooth user interactions.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        {/* Dechro Admin Dashboard */}
        <div className="col col-12 col-md-6 mb-4 order-1 order-md-1" data-animate="fade-in" data-delay="0.2s">
          <h2 data-animate="fade-in" data-delay="0.2s">🚀 Dechro Admin Dashboard</h2>
          <p data-animate="fade-in" data-delay="0.2s">
            Dechro Admin Dashboard provides a comprehensive interface to manage employees, track orders, and monitor payments with ease.
            The platform displays a summary of employee statistics, order details, and payment status, along with the ability to manage employees and update records dynamically.
          </p>
          <h2 data-animate="fade-in" data-delay="0.2s">🛠️ Tech Stack Used</h2>
          <ul>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Frontend:</strong> React.js, HTML, and CSS for creating a dynamic and responsive interface.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Backend:</strong> Node.js/Express to manage server-side logic and handle API requests.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Database:</strong> MongoDB with Mongoose to efficiently store and manage employee and order data.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>API:</strong> RESTful APIs developed using Express to ensure seamless communication between frontend and backend.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>State Management:</strong> Context API and useReducer for managing global state and ensuring smooth user interactions.</li>
          </ul>
        </div>
        <div className="col col-12 col-md-6 mb-4 order-2 order-md-2 imagge">
          <img src={Dechro} alt="project" className="img-fluid" />
        </div>
      </div>

      <div className="row">
        {/* Dechro Employee Dashboard */}
        <div className="col col-12 col-md-6 mb-4 order-2 order-md-1 imagge">
          <img src={Dechro1} alt="project" className="img-fluid" />
        </div>
        <div className="col col-12 col-md-6 mb-4 order-1 order-md-2" data-animate="fade-in" data-delay="0.2s">
          <h2 data-animate="fade-in" data-delay="0.2s">🚀 Dechro Employee Dashboard</h2>
          <p data-animate="fade-in" data-delay="0.2s">
            The <strong>Dechro Employee Dashboard</strong> provides a feature-rich interface to manage employee records,
            track orders, and monitor payments effortlessly. The streamlined UI ensures that administrators
            can oversee data efficiently and update records with ease.
          </p>
          <h2 data-animate="fade-in" data-delay="0.2s">🛠️ Tech Stack Used</h2>
          <ul>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Frontend:</strong> React.js, HTML, and CSS to create a dynamic and responsive interface.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Backend:</strong> Node.js/Express to manage server-side logic and handle API requests.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>Database:</strong> MongoDB with Mongoose to efficiently store and manage employee and order data.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>API:</strong> RESTful APIs developed using Express to ensure seamless communication between frontend and backend.</li>
            <li data-animate="fade-in" data-delay="0.2s"><strong>State Management:</strong> Context API and useReducer for managing global state and ensuring smooth user interactions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ourworkcard;
