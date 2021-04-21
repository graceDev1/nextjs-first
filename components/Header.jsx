import styleHeader from '../styles/Header.module.css';

function Header() {
    return (
        <div>
            <h1 className={styleHeader.title}>WebDev <span>Simplify</span>  </h1>
            <p className={styleHeader.description}>
                Keep up to date with the last webdev simplify
            </p>
        </div>
    )
}

export default Header
