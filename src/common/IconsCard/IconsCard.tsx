import "./iconsCard.css"

export const IconsCard = () => {

    return (
        <div className="icons-card-container">
            
            <div className="icons-card">
                <h3 className="card-title">Что мы покупаем</h3>

                <div className="row">
                    <div className="card-feature">Долги физических лиц</div>
                    <img className="icon" alt="" src="/icons/card.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Дебиторскую задолженность компаний</p>
                    <img className="icon" alt="" src="/icons/house.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Долги, обеспеченные залогом движимого и недвижимого имущества</p>
                    <img className="icon" alt="" src="/icons/depts.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Просроченные и проблемные долги</p>
                    <img className="icon" alt="" src="/icons/diagram.svg" />
                </div>
            </div>

            <div className="icons-card">
                <h3 className="card-title">Что не мы покупаем</h3>

                <div className="row">
                    <p className="card-feature">Неподтверждённые долги без правоустанавливающих документов</p>
                    <img className="icon" alt="" src="/icons/hand.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Долги по спорным требованиям без перспективы взыскания</p>
                    <img className="icon" alt="" src="/icons/safe.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Долги с фиктивными и мошенническими схемами</p>
                    <img className="icon" alt="" src="/icons/chain.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Долги, связананные с уголовными делами</p>
                    <img className="icon" alt="" src="/icons/hummer.svg" />
                </div>
            </div>
        </div>
    )
}