import './header.css';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { MainMenu } from '../MainMenu/MainMenu';
import { Modal, useModal } from '../../modals/Modal/Modal';
import RequestCall from '../../modals/RequestCall/RequestCall';

function EstimateButton() {
    const { open } = useModal()
    return <Button variant="secondary" onClick={open}>Перезвони мне</Button>
}

export const Header = () => {
    return (
        <header>
            <Logo />
            <MainMenu />
            <div className="actions">
                <div className="tel"><img src="/icons/phone.svg" alt="phone" /> <span>+7 (921) 66-66-666</span></div>
                <Modal component={RequestCall}>
                    <EstimateButton />
                </Modal>
            </div>
        </header>
    )
}