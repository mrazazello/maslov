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
                <h3 className="tel">+7 (921) 66-66-666</h3>
                <Button>Перезвоните мне</Button>
            </div>
        </header>
    )
}