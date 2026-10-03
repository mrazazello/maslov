import { Link } from "react-router-dom"
import "./mainMenu.css"

export const MainMenu = () => {
    return (
        <nav className="main-menu">
            <div className="item">
            <Link to="/">Главная</Link>
            </div>
            <div className="item">
            <Link to="/invest">Инвестируем</Link>
            </div>
            <div className="item">
            <Link to="/cases">Кейсы</Link>
            </div>
            <div className="item">
            <Link to="/sell">Продать долги</Link>
            </div>
        </nav>
    )
}