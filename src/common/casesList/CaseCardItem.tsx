import { Button } from "../Button/Button"
import { Modal, useModal } from "../../modals/Modal/Modal"
import { CaseDetails } from "./CaseDetails"

function CaseDetailsButton() {
    const { open } = useModal()
    return <Button variant="secondary" onClick={open}>Подробнее</Button>
}

export const CaseCardItem = () => {
    return (
        <div className="case-card-item">
            <div className="case-card-lid">Номинал 5 800 000 ₽, выкуп за 3 300 000 ₽, сделка закрыта за 5 дней</div>
            <div className="case-card-client">Долг физического лица</div>
            <Modal component={CaseDetails} title="Долг физического лица">
                <CaseDetailsButton />
            </Modal>
        </div>
    )
}