import "./blocksContainer.css"

interface BlocksContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const BlocksContainer = (props: BlocksContainerProps) => {
    const { children, className } = props;
    return (
        <div className={`blocks-container ${className}`}>
            {children}
        </div>
    )

}