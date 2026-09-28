import "./Footer.css";
import vector from "../../assets/vector.svg";
import union from "../../assets/union.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__year-and-subtitle">
        © 2024 Supersite, Powered by News API
      </p>
      <div className="footer__bottom-icon">
        <p className="footer__home">Home</p>
        <p className="footer__home">TripleTen</p>
        <img src={vector} alt="bear logo" className="footer__logo" />
        <img src={union} alt="instagram logo" className="footer__logo" />
      </div>
    </footer>
  );
}

export default Footer;
