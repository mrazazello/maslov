import { Button } from "../Button/Button"
import "./pageIntro.css"

interface PageIntroProps {
    title: string;
    subtitle?: string;
    showButton?: boolean;
    isNarrow?: boolean;
}

export const PageIntro = (props: PageIntroProps) => {
    const { title, subtitle, showButton, isNarrow } = props;
    return (
        <div className={`page-intro ${isNarrow ? "page-intro--narrow" : ""}`}>
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
            {showButton && (
                <Button variant="primary">Получить оценку</Button>
            )}
        </div>
    )
}