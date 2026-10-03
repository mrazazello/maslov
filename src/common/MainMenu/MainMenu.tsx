import { Link } from "react-router-dom"
import "./mainMenu.css"

interface MainMenuProps {
    open?: boolean
}

export const MainMenu = ({ open = false }: MainMenuProps) => {
    return (
        <nav className={`main-menu${open ? " main-menu--open" : ""}`}>
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