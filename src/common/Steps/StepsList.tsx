import { StepItem } from "./StepItem"
import "./stepsList.css"

export const StepsList = () => {
    return (
        <div className="steps">
            <h2>Как мы работаем</h2>
            <div className="steps-list">
                <StepItem title="Шаг 1" description="Вы отправляете подробную информацию о долге (в том числе сведения о должнике, его имуществе и активах (если известны) и правоустанавливающие документы на долг, предлагая свою цену."/>
                <StepItem title="Шаг 2" description="Мы проводим анализ и юридическую проверку представленных документов, оцениваем перспективы работы"/>
                <StepItem title="Шаг 3" description="Обсуждаем с Вами цену и условия покупки"/>
                <StepItem title="Шаг 4" description="Заключаем с Вами договор цессии и сразу оплачиваем ее"/>
            </div>
        </div>
    )
}