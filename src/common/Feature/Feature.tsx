interface FeatureProps {
    icon: string;
    title: string;
}

export const Feature = (props: FeatureProps) => {
    const { icon, title } = props;

    return (
        <div className="feature-card">
            <img className="icon" src={`/public/icons/${icon}.svg`} width={48} height={48}  alt={icon} />
            <h3 className="section-title">{title}</h3>
      </div>
    )
}