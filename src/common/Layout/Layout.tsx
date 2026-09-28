interface LayoutProps {
    children: React.ReactNode;
}


export const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <section className="layout">
            {children}
        </section>
    )

}