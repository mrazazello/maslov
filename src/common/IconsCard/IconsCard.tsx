import "./iconsCard.css"

export const IconsCard = () => {

    return (
        <div className="icons-card-container">
            <div className="icons-card">
                <h3 className="card-title">Что мы покупаем</h3>

                <div className="row">
                    <div className="card-feature">Дебиторская задолженность компаний</div>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Дебиторская задолженность компаний</p>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Дебиторская задолженность компаний</p>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
            </div>

            <div className="icons-card">
                <h3 className="card-title">Что мы покупаем</h3>

                <div className="row">
                    <p className="card-feature">Дебиторская задолженность компаний</p>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Дебиторская задолженность компаний</p>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
                <div className="row">
                    <p className="card-feature">Дебиторская задолженность компаний</p>
                    <img className="icon" alt="" src="/public/icons/eco.svg" />
                </div>
            </div>
        </div>
    )
}