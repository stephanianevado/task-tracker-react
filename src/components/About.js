import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section">
      <h4>Version 1.0.0</h4>
      <Link className="link-about" to="/">Go Back</Link>
    </div>
  );
};

export default About;
