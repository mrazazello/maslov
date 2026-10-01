import "./blocksContainer.css"

interface BlocksContainerProps {
    children: React.ReactNode;
    align?: "center" | "start" | "end";
}

export const BlocksContainer = (props: BlocksContainerProps) => {
    const { children, align = "start" } = props;
    return (
        <div className={`blocks-container align-${align}`}>
            {children}
        </div>
    )

}