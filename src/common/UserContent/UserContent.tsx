import "./userContent.css"

interface UserContentProps {
    children: React.ReactNode;
}


export const UserContent = (props: UserContentProps) => {
    const { children } = props;
    return (
        <div className="user-content">
            {children}
        </div>
    )
}