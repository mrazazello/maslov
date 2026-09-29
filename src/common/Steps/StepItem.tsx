interface StepItemProps {
    title: string;
    description: string;
}
export const StepItem = (props: StepItemProps) => {
    const { title, description } = props;
    return (
        <div className="step-item">
          <h3 className="step-title">{title}</h3>
          <div className="step-description">{description}</div>
      </div>
    )

}