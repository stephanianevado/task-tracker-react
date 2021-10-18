import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <h4>By Stephania Nevado</h4>
      <Link className="link-footer" to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
