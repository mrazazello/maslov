import { Link } from "react-router-dom"
import "./logo.css"

export const Logo = () => {
    return (
        <div className="logo">
            <Link to="/"><img src="/public/logo.svg" alt="Dept capital" /></Link>
        </div>
    )
}