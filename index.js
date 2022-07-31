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

function MainContent() {
    return(
        <div>
            <h1>Fun Facts About React!</h1>
                <ul>
                    <li>First released in 2013</li>
                    <li>Originally created by Jordan Walke</li>
                    <li>100k+ stars on GitHub</li>
                    <li>Maintained by Facebook</li>
                    <li>Powers thousands of enterprise applications, including mobile apps!</li>
                </ul>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <small>&copy; 2022 Lam development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))