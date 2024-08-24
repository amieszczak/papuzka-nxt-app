import HeaderTop from "./header_top/headerTop.js";
import HeaderNav from "./header_nav/headerNav.js";
import './header.css'

export default function Header() {
    return (
        <header>
            <HeaderTop />
            <HeaderNav />
        </header>
    )
}