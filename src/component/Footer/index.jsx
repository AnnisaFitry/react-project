import './Footer.css'

function Footer () {
    return (
        <footer className="text-center text-lg-start">
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2023 Copyright&nbsp;
                <a className="text-light" href="#">
                Alterra.com
                </a>
            </div>
        </footer>
    )
}

export default Footer