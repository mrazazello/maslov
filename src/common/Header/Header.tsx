import './header.css';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { MainMenu } from '../MainMenu/MainMenu';

export const Header = () => {
    return (
        <header>
            <Logo />
            <MainMenu />
            <div className="actions">
                <div className="tel">+7 (921) 66-66-666</div>
                <Button variant="secondary">Перезвоните мне</Button>
            </div>
        </header>
    )
}