import { Feature } from "./Feature"
import "./features-list.css"

export const FeaturesList = () => {
    return (
        <div className="features-list">
            <Feature icon="verified" title="Оценка за 1-2 часа" />
            <Feature icon="privacy-tip" title="Конфиденциальность" />
            <Feature icon="handshake" title="Оплата в день договора" />
            <Feature icon="eco" title="Юридическая чистота" />
            <Feature icon="language" title="Работаем по всей РФ" />
            <Feature icon="emoji-objects" title="Без скрытых комиссий" />
        </div>
    )
}