// can also use: export default function Header() {}
function Header() {
    return(
        <header>
            <nav>
                <img className="nav-logo" src="./React-icon.svg.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}