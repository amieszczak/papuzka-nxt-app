import "./header_top.css";
/* import logo from "/01_header/papużka_logo_linear closed.svg"; */
/* import user from "./01_header/user.svg"; */
/* const titlehead = require("./01_header/Frame 15.png"); */
import Image from "next/image";


export default function HeaderTop() {
  
  return (
    <div className="header-top">
      <Image className="header-icon header-logo" 
      src='/papużka_logo_linear_closed.svg'
      width={200}
      height={200}
      alt="logo" />
      <Image
        className="header-icon header-icon-middle"
        width={639}
        height={220}
        src='/Frame15.png'
        alt="logo text"
      />
      <Image className="header-icon header-user" 
      src='/user.svg'
      width={200}
      height={200}
      alt='user-icon' 
      />
    </div>
    
  );
}
