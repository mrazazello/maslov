interface SellCardProps {
    title: string;
    description: string;
}

export const SellCard = ({ title, description }: SellCardProps) => {
    return (
        <div className="sell-card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}