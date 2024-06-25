import './footer_bottom.css';

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-content">
        <div className="info-footer">
          <ul>
            <li>
              <a href="#">Polityka prywatności</a>
            </li>
            <li>
              <a href="#">Warunki Korzystania</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <div className="fb">
            <a href="http://facebook.com" target="blank"></a>
          </div>
          <div className="ig">
            <a href="http://instagram.com" target="blank"></a>
          </div>
          <div className="tw">
            <a href="http://twitter.com" target="blank"></a>
          </div>

          <div className="in">
            <a href="http://linkedin.com" target="blank"></a>
          </div>
        </div>
      </div>
      <div className="reserved-footer">
        <p>2023 Papużka &copy Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
}
