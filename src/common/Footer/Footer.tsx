import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo"
import { MainMenu } from "../MainMenu/MainMenu"
import './footer.css';

export const Footer = () => {
    return (
    <footer>
        <Logo />
        <MainMenu />
        <div className="social-links">
            <img src="/telegram.svg" alt="Telegram" />
            <img src="/vk.svg" alt="VK" />
        </div>
        <div className="credits">
            <Link to="/politika">Политика обработки персональных данных</Link>
            <p>© 2026 Дебт Капитал. Все права защищены.</p>
        </div>
    </footer>
    )
}