import { Button } from "../Button/Button"
import "./pageIntro.css"

interface PageIntroProps {
    title: string;
    subtitle?: string;
    showButton?: boolean;
}

export const PageIntro = (props: PageIntroProps) => {
    const { title, subtitle, showButton } = props;
    return (
        <div className="page-intro">
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
            {showButton && (
                <Button variant="primary">Получить оценку</Button>
            )}
        </div>
    )
}