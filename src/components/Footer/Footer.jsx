import "./Footer.css";

function Footer() {
  return (
    <footer>
      <span className="footer">
        <p className="footer__text">Developed by Benjamin Corpus</p>
        <p className="footer__text">{new Date().getFullYear()}</p>
      </span>
    </footer>
  );
}

export default Footer;