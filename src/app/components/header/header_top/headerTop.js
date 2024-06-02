import "./header_top.css";
/* import logo from "./01_header/papużka_logo_linear closed.svg"; */
import user from "./01_header/user.svg";
/* const titlehead = require("./01_header/Frame 15.png"); */
import Image from "next/image";


console.log('aksdjfhjd');
export default function HeaderTop() {
  
  return (
    <div className="header-top">
      <Image className="header-icon header-logo" src='/01_header/papużka_logo_linear closed.svg' 
      width={100}
      height={100}
      alt="logo" />
      <Image
        className="header-icon header-icon-middle"
        width="100"
        height="100"
        src='/01_header/Frame 15.png'
        alt="logo text"
      />
      <img className="header-icon header-user" src={user} />
    </div>
    
  );
}
