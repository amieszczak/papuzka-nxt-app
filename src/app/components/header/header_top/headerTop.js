import "./header_top.css";
import logo from "./01_header/papużka_logo_linear closed.svg";
import user from "./01_header/user.svg";
const titlehead = require("./01_header/Frame 15.png");

export default function HeaderTop() {
  return (
    <div class="header-top">
      <img class="header-icon header-logo" src={logo} alt="logo" />
      {<img
        class="header-icon header-icon-middle"
        src={titlehead}
        alt="logo text"
      />}
      <img class="header-icon header-user" src={user} />
    </div>
  );
}
