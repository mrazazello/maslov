import { Link } from "react-router-dom";
import './footer.css';

export const Footer = () => {
    return (
    <footer>
        <div className="footer-left">
            <div><span className="footer-param">Часы работы:</span> 9:00 - 20:00</div>
            <div><span className="footer-param">Телефон:</span> +7 (999) 999-99-99</div>
        </div>

        <div className="footer-right">
            <div className="social-links">
                <img src="/telegram.svg" alt="Telegram" width={24} height={24} />
                <img src="/vk.svg" alt="VK" width={24} height={24} />
            </div>
            <div className="credits">© 2026 Дебт Капитал. Все права защищены.</div>
            <div className="credits">
                <Link to="/politika">Политика обработки персональных данных</Link>
            </div>
        </div>
    </footer>
    )
}