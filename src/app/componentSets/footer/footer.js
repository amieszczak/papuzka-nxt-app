import './footer.css';
import FooterBottom from "./footer_bottom/footerBottom.js"
import FooterMenu from "./footer_menu/footerMenu.js"


export default function Footer() {
    return (
        <footer>
            
            <FooterMenu />
            <FooterBottom />
            
        </footer>
    )
}

/* 
<script src="zenscroll-min.js"></script> */