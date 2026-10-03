import RequestCall from "../../modals/RequestCall/RequestCall"
import { Modal, useModal } from "../../modals/Modal/Modal"
import { Button } from "../Button/Button"
import "./pageIntro.css"

interface PageIntroProps {
    title: string;
    subtitle?: string;
    showButton?: boolean;
    isNarrow?: boolean;
}

function EstimateButton() {
    const { open } = useModal()
    return <Button variant="primary" onClick={open}>Получить оценку</Button>
}

export const PageIntro = (props: PageIntroProps) => {

    
    const { title, subtitle, showButton, isNarrow } = props;
    return (
        <div className={`page-intro ${isNarrow ? "page-intro--narrow" : ""}`}>
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
            {showButton && (
                <Modal component={RequestCall}>
                    <EstimateButton />
                </Modal>
            )}
        </div>
    )
}
